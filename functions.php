<?php
function is_localhost() {
    $whitelist = [
        '127.0.0.1',
        '::1'
    ];
    
    if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
        // not valid
        return false;
    }
    return true;
}

// Remove all default WP template redirects/lookups
remove_action( 'template_redirect', 'redirect_canonical' );

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
    add_rewrite_rule( '^/(.+)/?', 'index.php', 'top' );
}
add_action( 'init', 'remove_redirects' );

/**
 * General Theme Settings
 *
 * @since v1.0
 */
if ( ! function_exists( 'spa_setup_theme' ) ) :
    function spa_setup_theme() {

        // Theme Support.
        // add_theme_support( 'title-tag' );
        // add_theme_support( 'automatic-feed-links' );
        add_theme_support( 'post-thumbnails' );
        // add_theme_support( 'html5', array(
        //     'search-form',
        //     'comment-form',
        //     'comment-list',
        //     'gallery',
        //     'caption',
        //     'script',
        //     'style',
        //     'navigation-widgets',
        // ) );

        // // Add support for Block Styles.
        // add_theme_support( 'wp-block-styles' );
        // // Add support for full and wide align images.
        // add_theme_support( 'align-wide' );
        // // Add support for editor styles.
        // add_theme_support( 'editor-styles' );
        // // Enqueue editor styles.
        // add_editor_style( 'style-editor.css' );

        // // Default Attachment Display Settings.
        // update_option( 'image_default_align', 'none' );
        // update_option( 'image_default_link_type', 'none' );
        // update_option( 'image_default_size', 'large' );

        // // Custom CSS-Styles of Wordpress Gallery.
        // add_filter( 'use_default_gallery_style', '__return_false' );

    }
    add_action( 'after_setup_theme', 'spa_setup_theme' );
endif;

// nonceの有効期限を10秒に設定
add_filter( 'nonce_life', function () { return 10; } );

function add_rest_original_endpoint(){
	//エンドポイントを登録
	register_rest_route( 'wp/6k', '/artwork', array(
        'methods' => 'GET',
        'callback' => 'artworkSingle',
        'permission_callback' => function() { return true; }
	));
    register_rest_route( 'wp/6k', '/nonce', array(
        'methods' => 'POST',
        'callback' => 'create_nonce',
        'permission_callback' => function() { return true; }
    ));
    register_rest_route( 'wp/6k', '/contact', array(
        'methods' => 'POST',
        'callback' => 'contact',
        'permission_callback' => function() { return true; }
    ));
}
add_action('rest_api_init', 'add_rest_original_endpoint');

function artworkSingle($data) {
    global $wpdb;

    $slug = $data->get_param( 'slug' );
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'orderby' => 'date',
        'order' => 'DESC',
        'name' => $slug
    );
    $posts = get_posts($args);
    $data = array();
    foreach ($posts as $post) {
        // カテゴリーを配列で取得
        $categories = get_the_category($post->ID);
        $category = array();
        foreach ($categories as $cat) {
            $category[] = array(
                'id' => $cat->term_id,
                'name' => $cat->name,
                'slug' => $cat->slug
            );
        }
        // タグを配列で取得
        $tags = get_the_tags($post->ID);
        $tag = array();
        foreach ($tags as $t) {
            $tag[] = array(
                'id' => $t->term_id,
                'name' => $t->name,
                'slug' => $t->slug
            );
        }
        // Smart Custom Fieldsの値を取得
        $fields = SCF::get('details', $post->ID);
        $details = array();
        foreach ($fields as $field) { 
            $image = $field['image'];
            if ($image) {
                $image = wp_get_attachment_url( $image );
            }
            $description = $field['description'];
            $details[] = array(
                'image' => $image,
                'description' => $description
            );
        }
        $trigger_image = SCF::get('trigger_image', $post->ID);
        if ($trigger_image) {
            $trigger_image = wp_get_attachment_url( $trigger_image );
        }

        $data[] = array(
            'id' => $post->ID,
            'title' => $post->post_title,
            'content' => $post->post_content,
            'date' => $post->post_date,
            'category' => $category,
            'tag' => $tag,
            'thumbnail' => get_the_post_thumbnail_url($post->ID, 'full'),
            'details' => $details,
            'trigger_image' => $trigger_image,
            'trigger_description' => SCF::get('trigger_description', $post->ID),
            'credit'  => SCF::get('credit', $post->ID),
        );

    }
    return $data;
}
/**
 * 一般設定に項目追加
 */
// 項目の追加
function add_custom_option_field(){
    add_settings_field( 'mailform_to', 'メールフォーム送信先アドレス', 'display_custom_option', 'general');
    register_setting( 'general', 'mailform_to' );
  }
  add_filter( 'admin_init', 'add_custom_option_field' );
  // 追加した項目の内容
  function display_custom_option(){
    $mailform_to = get_option( 'mailform_to' );
  ?>
    <input type="text" id="mailform_to" name="mailform_to" style="width: 50%;" value="<?php echo $mailform_to; ?>">
  <?php
}
  
function create_nonce($data) {
    $nonce = wp_create_nonce( 'rokkei.co.jp' );
    return $nonce;
}
function contact($data) {
    $nonce = $data->get_param( 'nonce' );
    if ( ! wp_verify_nonce( $nonce, 'rokkei.co.jp' ) ) {
        return 'nonce error';
    }
    $name = $data->get_param( 'name' );
    $kana = $data->get_param( 'kana' );
    $company = $data->get_param( 'company' );
    $company_kana = $data->get_param( 'company_kana' );
    $tel = $data->get_param( 'tel' );
    $email = $data->get_param( 'email' );
    $message = $data->get_param( 'message' );
    $work = $data->get_param( 'work' );

$body = <<< EOM
{$name}様

お問い合わせいただきありがとうございます。
改めて担当者よりご連絡いたしますので、しばらくお待ち下さい。

ご入力頂いた内容は以下になります。
---
お名前: {$name}
フリガナ: {$kana}
会社名: {$company}
会社名(フリガナ): {$company_kana}
電話番号: {$tel}
メールアドレス: {$email}
気になったプロジェクト: {$work}
お問い合わせ内容: {$message}
---

【六景】
HP: rokkei.co.jp
mail: info@rokkei.co.jp
EOM;
    
    
    $headers  = 'From: 六景 <system@rokkei.co.jp>' . "\r\n";
    $headers .= 'Reply-To: 六景 <info@rokkei.co.jp>' . "\r\n";
    $success1 = wp_mail( $email, '【六景】お問い合わせを受け付けました', $body, $headers );
        
            // 管理メール送信処理
$body = <<< EOM
webよりお問い合わせがありました。
ご入力頂いた内容は以下になります。
---
お名前: {$name}
フリガナ: {$kana}
会社名: {$company}
会社名(フリガナ): {$company_kana}
電話番号: {$tel}
メールアドレス: {$email}
気になったプロジェクト: {$work}
お問い合わせ内容: {$message}
---
EOM;
        
        $success2 = wp_mail( get_option( 'mailform_to' ), '【六景】webよりお問い合わせがありました', $body, $headers );
    
    
        return ['status' => $success1 && $success2];
}
?>
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
?>
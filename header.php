<?php
/**
 * The header for our theme
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">

<?php if(!is_localhost()): ?>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NMXRF69');</script>
<!-- End Google Tag Manager -->
<?php endif; ?>

<?php wp_head(); ?>
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@400&display=swap" rel="stylesheet">

<!-- Font Plus -->
<script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?SKUuJA9FCRo%3D&box=a0gTO1QmFhk%3D&aa=1&ab=2"></script>
<script type="text/javascript">
function reload_fontPlus() {
    FONTPLUS.start()
}
FONTPLUS.async()

</script>
<script defer="defer" src="<?php echo get_template_directory_uri(); ?>/6k/build/static/js/main.f0dfab3e.js"></script>
<link href="<?php echo get_template_directory_uri(); ?>/6k/build/static/css/main.b8dec52b.css" rel="stylesheet">
</head>

<body <?php body_class(); ?>>
<?php if(!is_localhost()): ?>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMXRF69"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<?php endif; ?>
<?php wp_body_open(); ?>

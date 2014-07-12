<?php
/**
 * Created by JetBrains PhpStorm.
 * Project: Coompany’s site
 * User: Andrea Jemmett - acidghost
 * Date: 20/12/13
 * Time: 18:00
 */
?>
<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
	<!--<![endif]-->
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title('|', true, 'right'); ?> <?php bloginfo('name'); ?></title>
		<meta name="viewport" content="width=device-width">
		<meta name="description" content="Coompany è una società di persone accomunate dalla volontà di cambiare lo stato di cose, utilizzando quella che crediamo essere la più importante conquista dell’uomo: la collaborazione.">
		<meta name="author" content="">

		<link href="<?php echo get_template_directory_uri(); ?>/css/style.css" rel="stylesheet">

		<!--[if lt IE 9]>
		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<script>window.html5 || document.write('<script src="js/vendor/html5shiv.js"><\/script>')</script>
		<![endif]-->

		<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.png">
		<link rel="apple-touch-icon-precomposed" sizes="144x144"
			  href="<?php echo get_template_directory_uri(); ?>/images/favicon.png">
		<link rel="apple-touch-icon-precomposed" sizes="114x114"
			  href="<?php echo get_template_directory_uri(); ?>/images/favicon.png">
		<link rel="apple-touch-icon-precomposed" sizes="72x72"
			  href="<?php echo get_template_directory_uri(); ?>/images/favicon.png">
		<link rel="apple-touch-icon-precomposed" href="<?php echo get_template_directory_uri(); ?>/images/favicon.png">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>"/>
		<?php wp_head(); ?>
	</head>

	<body>

		<div class="container">
            <?php
            if(!is_home()) {
                echo get_template_part('navbar');
            }
            ?>

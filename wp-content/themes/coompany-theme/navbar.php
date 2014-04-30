<?php
/**
 * Created by JetBrains PhpStorm.
 * Project: Coompany’s site
 * User: Andrea Jemmett - acidghost
 * Date: 20/12/13
 * Time: 22:15
 */
?>

<nav class="navbar<?php echo((is_home()) ? (null) : (' navbar-default navbar-fixed-top')); ?>">
	<div class="row">
		<div class="navbar-header">
			<a class="navbar-brand" href="<?php bloginfo('siteurl'); ?>">
				<h1 class="sr-only"><?php bloginfo('name'); ?></h1>
				<img src="<?php echo get_template_directory_uri(); ?>/images/coom-logo.png" />
			</a>
		</div>
	</div>
	<div class="row" id="menu-row">
		<?php
        /*
		$args = array(
			'theme_location' => 'main-menu',
			'depth'      => 2,
			'container'  => false,
			'menu_class'     => 'nav navbar-nav',
			'walker'     => new Bootstrap_Walker_Nav_Menu()
		);

		wp_nav_menu($args);
        */
        //echo '<div class="col-xs-12">';
        wp_nav_menu(
            array(
                'menu'              => 'main-menu',
                'depth'             => 2,
                'container'         => 'div',
                'container_class'   => 'col-xs-12 quilia-container',
                'menu_class'        => 'quilia-menu row',
                'sottomenu'        => 0,
                'fallback_cb'       => 'wp_quilia_navwalker::fallback',
                'walker'            => new wp_quilia_navwalker(),
                'items_wrap' => '<div id="%1$s" class="%2$s">%3$s</div>'
            )
        );
        //echo '</div>';
		?>
	</div>
	<?php if(!is_home()) { ?><div class="row" id="menu-shadow">&nbsp;</div><?php } ?>
</nav>
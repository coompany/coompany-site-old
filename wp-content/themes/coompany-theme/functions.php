<?php
/**
 * Created by JetBrains PhpStorm.
 * Project: Coompany’s site
 * User: Andrea Jemmett - acidghost
 * Date: 19/12/13
 * Time: 11:52
 */


//  # THEME SUPPORT
add_theme_support('post-thumbnails');
add_theme_support('menus');

//  # EXCLUDE PAGES FROM ADMIN
add_filter( 'parse_query', 'exclude_pages_from_admin' );
function exclude_pages_from_admin($query) {
	global $pagenow,$post_type;
	if (is_admin() && $pagenow=='edit.php' && $post_type =='page') {
		// 122 is page Team
		//$query->query_vars['post__not_in'] = array('122');
	}
}


//  # CUSTOM POST TYPES
function register_my_custom_post_type() {

	//  Features prodotti
	$labels_features = array(
		'name'          => 'Features Prodotti',
		'singular_name' => 'Feature Prodotto',
		'add_new'       => 'Aggiungi Nuova',
		'add_new_item'  => 'Aggiungi Nuova Feature',
		'edit_item'     => 'Modifica Feature',
		'new_item'      => 'Nuova Feature',
		'all_items'     => 'Features Prodotti',
		'view_item'     => 'Vedi Features',
		//		'search_items'       => 'Search Books',
		//		'not_found'          => 'No books found',
		//		'not_found_in_trash' => 'No books found in Trash',
		//		'parent_item_colon'  => '',
		'menu_name'     => 'Features'
	);

	$args_features = array(
		'labels'             => $labels_features,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array('slug' => 'features'),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports'           => array('title', 'editor', 'thumbnail', 'excerpt')
	);

	register_post_type('features', $args_features);

	//	News
	$labels_news = array(
		'name'          => 'News',
		'singular_name' => 'News',
		'add_new'       => 'Aggiungi Nuova',
		'add_new_item'  => 'Aggiungi Nuova News',
		'edit_item'     => 'Modifica News',
		'new_item'      => 'Nuova News',
		'all_items'     => 'News',
		'view_item'     => 'Vedi News',
		//		'search_items'       => 'Search Books',
		//		'not_found'          => 'No books found',
		//		'not_found_in_trash' => 'No books found in Trash',
		//		'parent_item_colon'  => '',
		'menu_name'     => 'News'
	);

	$args_news = array(
		'labels'             => $labels_news,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array('slug' => 'news'),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports'           => array('title', 'editor', 'thumbnail')
	);

	register_post_type('news', $args_news);

	//	Team
	$labels_team = array(
		'name'          => 'Membri Team',
		'singular_name' => 'Membro Team',
		'add_new'       => 'Aggiungi Nuovo',
		'add_new_item'  => 'Aggiungi Nuovo Membro',
		'edit_item'     => 'Modifica Membro',
		'new_item'      => 'Nuovo Membro',
		'all_items'     => 'Team',
		'view_item'     => 'Vedi Team',
		//		'search_items'       => 'Search Books',
		//		'not_found'          => 'No books found',
		//		'not_found_in_trash' => 'No books found in Trash',
		//		'parent_item_colon'  => '',
		'menu_name'     => 'Team'
	);

	$args_team = array(
		'labels'             => $labels_team,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array('slug' => 'team'),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports'           => array('title', 'editor', 'thumbnail')
	);

	register_post_type('team', $args_team);

	//	Job
	$labels_job = array(
		'name'          => 'Jobs',
		'singular_name' => 'Job',
		'add_new'       => 'Aggiungi Nuovo',
		'add_new_item'  => 'Aggiungi Nuovo Job',
		'edit_item'     => 'Modifica Job',
		'new_item'      => 'Nuovo Job',
		'all_items'     => 'Jobs',
		'view_item'     => 'Vedi Job',
		//		'search_items'       => 'Search Books',
		//		'not_found'          => 'No books found',
		//		'not_found_in_trash' => 'No books found in Trash',
		//		'parent_item_colon'  => '',
		'menu_name'     => 'Jobs'
	);

	$args_job = array(
		'labels'             => $labels_job,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array('slug' => 'job'),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports'           => array('title', 'editor')
	);

	register_post_type('team', $args_team);

}

add_action('init', 'register_my_custom_post_type');


//	# CUSTOM TAXONOMIES
function create_my_taxonomies() {

	//	prodotti
	register_taxonomy(
		'prodotti',
		'features',
		array(
			'labels' => array(
				'name' => 'Prodotto',
				'add_new_item' => 'Aggiungi Nuovo Prodotto',
				'new_item_name' => "Nuovo Prodotto"
			),
			'show_ui' => true,
			'show_tagcloud' => false,
			'hierarchical' => true
		)
	);

	//	news-topic
	register_taxonomy(
		'news-topic',
		'news',
		array(
			'labels' => array(
				'name' => 'Topic',
				'add_new_item' => 'Aggiungi Nuovo Topic',
				'new_item_name' => "Nuovo Topic"
			),
			'show_ui' => true,
			'show_tagcloud' => false,
			'hierarchical' => true
		)
	);

}

add_action( 'init', 'create_my_taxonomies', 0 );


//	# INCLUDE SCRIPTS
function enqueue_conditional_scripts() {
	if(is_admin())
		return;

	wp_enqueue_script('jquery', null, array(), null, false);
	wp_enqueue_script('bootstrap',  get_template_directory_uri().'/js/vendor/bootstrap/bootstrap.min.js', array('jquery'), null, true);

    wp_enqueue_script('three',  get_template_directory_uri().'/quilia/js/three.min.js', array('jquery'), null, false);
    wp_enqueue_script('Detector',  get_template_directory_uri().'/quilia/js/Detector.js', array('jquery'), null, false);
    wp_enqueue_script('onde',  get_template_directory_uri().'/quilia/js/onde.js', array('three'), null, false);
	
    wp_enqueue_style('sin-menu', get_template_directory_uri().'/quilia/css/style.css');

    wp_enqueue_style('animate-css', get_template_directory_uri().'/css/animate/animate.min.css');
	wp_enqueue_script('wow',  get_template_directory_uri().'/js/vendor/wow/wow.min.js', array(), null, false);

    wp_enqueue_script('jquery-nicescroll', get_template_directory_uri().'/js/vendor/jquery/jquery.nicescroll.min.js', array('jquery'), null, true);

	if(is_tax(array('prodotti'))) {
		wp_enqueue_script('jquery-parallax', get_template_directory_uri().'/js/vendor/jquery/jquery.parallax-1.1.3.js', array('jquery'), null, true);
		wp_enqueue_script('main-js', get_template_directory_uri().'/js/main.js', array('jquery-parallax', 'jquery-nicescroll', 'wow'), null, true);
	} else {
		wp_enqueue_script('main-js', get_template_directory_uri().'/js/main.js', array('bootstrap', 'jquery-nicescroll', 'wow'), null, true);
	}
}

add_action('wp_enqueue_scripts', 'enqueue_conditional_scripts');


//	# MENUS REGISTRATION
function register_my_menus() {
	register_nav_menus(
		array(
			'main-menu' => __( 'Main Menu' )
		)
	);
}

add_action( 'init', 'register_my_menus' );


//	# MENUS CREATION
$run_once = get_option('menu_check');
if(!$run_once) {

	//give your menu a name
	$name = 'theme default menu';
	//create the menu
	$menu_id = wp_create_nav_menu($name);
	//then get the menu object by its name
	$menu = get_term_by( 'name', $name, 'nav_menu' );
	update_option('main_menu_id', $menu->term_id);

	//then add the actuall link/ menu item and you do this for each item you want to add
	$prodotti_menu_id = wp_update_nav_menu_item($menu->term_id, 0, array(
		'menu-item-title' => __('Prodotti'),
		'menu-item-classes' => '',
		'menu-item-url' => '#',
		'menu-item-status' => 'publish'
	));
	update_option('prodotti_menu_id', $prodotti_menu_id);
	$news_menu_id = wp_update_nav_menu_item($menu->term_id, 0, array(
		'menu-item-title' => __('News'),
		'menu-item-classes' => '',
		'menu-item-url' => '#',
		'menu-item-status' => 'publish'
	));
	update_option('news_menu_id', $news_menu_id);
	$team_menu_id = wp_update_nav_menu_item($menu->term_id, 0, array(
		'menu-item-title' => __('Team'),
		'menu-item-classes' => '',
		'menu-item-url' => get_permalink(122),			// 122 is page id for Team page template
		'menu-item-status' => 'publish'
	));
	update_option('team_menu_id', $team_menu_id);

	//then you set the wanted theme  location
	$locations = get_theme_mod('nav_menu_locations');
	$locations['main-menu'] = $menu->term_id;
	set_theme_mod( 'nav_menu_locations', $locations );

	// then update the menu_check option to make sure this code only runs once
	update_option('menu_check', true);

}


//	# ADD TAXONOMIES TERMS AS SECOND-LEVEL MENU ITEMS
function add_taxonomies_to_menu() {

	$menu_id = get_option('main_menu_id');
	$prodotti_id = get_option('prodotti_menu_id');
	$news_id = get_option('news_menu_id');

	//	$mymenu = wp_get_nav_menu_object("theme default menu");
	//	$menu_id = (int) $mymenu->term_id;

	$menu_items = wp_get_nav_menu_items($menu_id);
	$menu_items_names = array();
	if(count($menu_items) > 0) {
		foreach($menu_items as $item) {
			array_push($menu_items_names, $item->post_name);
		}
	}

	$products_terms = get_terms('prodotti', array('hide_empty'=>false));
	if(count($products_terms) > 0) {
		foreach($products_terms as $term) {
			if(!array_search(strtolower($term->name), $menu_items_names)) {
				wp_update_nav_menu_item($menu_id, 0, array(
					'menu-item-title' => __($term->name),
					'menu-item-classes' => '',
					'menu-item-url' => get_term_link($term),
					'menu-item-status' => 'publish',
					'menu-item-parent-id' => $prodotti_id
				));
			}
		}
	}

	$news_terms = get_terms('news-topic', array('hide_empty'=>false));
	if(count($news_terms) > 0) {
		foreach($news_terms as $term) {
			if(!array_search(strtolower($term->name), $menu_items_names)) {
				wp_update_nav_menu_item($menu_id, 0, array(
					'menu-item-title' => __($term->name),
					'menu-item-classes' => '',
					'menu-item-url' => get_term_link($term),
					'menu-item-status' => 'publish',
					'menu-item-parent-id' => $news_id
				));
			}
		}
	}

}

add_action('admin_init', 'add_taxonomies_to_menu');


//  # SIN MENU
require_once(dirname(__FILE__).'/quilia/wp_quilia_navwalker.php');

//	# BOOTSTRAP DROPDOWN MENU
add_action( 'after_setup_theme', 'bootstrap_setup' );

if ( ! function_exists( 'bootstrap_setup' ) ):

	function bootstrap_setup() {

		class Bootstrap_Walker_Nav_Menu extends Walker_Nav_Menu {


			function start_lvl( &$output, $depth ) {

				$indent = str_repeat( "\t", $depth );
				$output    .= "\n$indent<ul class=\"dropdown-menu\">\n";

			}

			function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {

				$indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

				$li_attributes = '';
				$class_names = $value = '';

				$classes = empty( $item->classes ) ? array() : (array) $item->classes;
				$classes[] = ($args->has_children) ? 'dropdown' : '';
				$classes[] = ($item->current || $item->current_item_ancestor) ? 'active' : '';
				$classes[] = 'menu-item-' . $item->ID;


				$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args ) );
				$class_names = ' class="' . esc_attr( $class_names ) . '"';

				$id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args );
				$id = strlen( $id ) ? ' id="' . esc_attr( $id ) . '"' : '';

				if($depth == 1) {
					$output .= $indent . '<li class="menu">&nbsp;</li>';
				}
				$output .= $indent . '<li' . $id . $value . $class_names . $li_attributes . '>';

				$attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
				$attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
				$attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
				$attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';
				$attributes .= ($args->has_children)        ? ' class="dropdown-toggle" data-toggle="dropdown"' : '';

				$item_output = $args->before;
				$item_output .= '<a'. $attributes .'>';
				$item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
				$item_output .= ($args->has_children) ? ' <b class="caret"></b></a>' : '</a>';
				$item_output .= $args->after;

				$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
			}

			function display_element( $element, &$children_elements, $max_depth, $depth=0, $args, &$output ) {

				if ( !$element )
					return;

				$id_field = $this->db_fields['id'];

				//display this element
				if ( is_array( $args[0] ) )
					$args[0]['has_children'] = ! empty( $children_elements[$element->$id_field] );
				else if ( is_object( $args[0] ) )
					$args[0]->has_children = ! empty( $children_elements[$element->$id_field] );
				$cb_args = array_merge( array(&$output, $element, $depth), $args);
				call_user_func_array(array(&$this, 'start_el'), $cb_args);

				$id = $element->$id_field;

				// descend only when the depth is right and there are childrens for this element
				if ( ($max_depth == 0 || $max_depth > $depth+1 ) && isset( $children_elements[$id]) ) {

					foreach( $children_elements[ $id ] as $child ){

						if ( !isset($newlevel) ) {
							$newlevel = true;
							//start the child delimiter
							$cb_args = array_merge( array(&$output, $depth), $args);
							call_user_func_array(array(&$this, 'start_lvl'), $cb_args);
						}
						$this->display_element( $child, $children_elements, $max_depth, $depth + 1, $args, $output );
					}
					unset( $children_elements[ $id ] );
				}

				if ( isset($newlevel) && $newlevel ){
					//end the child delimiter
					$cb_args = array_merge( array(&$output, $depth), $args);
					call_user_func_array(array(&$this, 'end_lvl'), $cb_args);
				}

				//end this element
				$cb_args = array_merge( array(&$output, $element, $depth), $args);
				call_user_func_array(array(&$this, 'end_el'), $cb_args);

			}

		}

	}

endif;

// LOGIN
function custom_login() {
    echo '<link rel="stylesheet" type="text/css" href="'.get_bloginfo('template_directory').'/inc/login.css" />';
}
add_action('login_head', 'custom_login');

function LOGIN_the_url( $url ) {
    return get_bloginfo( 'url' );
}
function LOGIN_the_title( $url ) {
    return get_bloginfo( 'name' );
}
add_filter( 'login_headerurl', 'LOGIN_the_url' );
add_filter( 'login_headertitle', 'LOGIN_the_title' );

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
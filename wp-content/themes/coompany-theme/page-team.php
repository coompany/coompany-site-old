<?php
/**
 * Template Name: Team Page
 *
 * Created by PhpStorm.
 * Project: Coompany’s site
 * User: Andrea Jemmett - acidghost
 * Date: 26/12/13
 * Time: 19:37
 */

echo get_header();
?>

			<section class="row">
				<div class="col-md-8">
					<?php $page_chi_siamo = get_post(119);		// page 119 is Chi siamo ?>
					<h2 style="margin-bottom: 30px"><?php echo $page_chi_siamo->post_title; ?></h2>
					<div class="content">
						<?php echo apply_filters('the_content', $page_chi_siamo->post_content); ?>
					</div>
				</div>
				<div class="col-md-3 col-md-offset-1" id="page-contatti">
					<?php $page_contatti = get_post(148);		// page 148 is Contatti ?>
					<h3>
                        <img src="<?php echo get_template_directory_uri(); ?>/images/icon_91.png" width="20" style="padding-bottom: 3px">
                        <?php echo $page_contatti->post_title; ?>
                    </h3>
					<div class="content">
						<?php echo apply_filters('the_content', $page_contatti->post_content); ?>
					</div>
				</div>
			</section>

            <hr />

            <section id="section-team-members" class="row">
                <div class="col-xs-12">
                    <?php
                    query_posts('post_type=team&posts_per_page=-1&order=asc');
                    if(have_posts()) :
                        echo '<div class="row">';
                        $i = 0;
                        while(have_posts()) : the_post();
                            $image_url = wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) );
                            ?>
                            <div class="col-md-3 team-member">
                                <img class="img-circle" src="<?php echo $image_url; ?>" />
                                <h4><?php echo get_the_title(); ?><br /><small><?php echo get_field('role'); ?></small></h4>
                                <p class="content"><?php echo get_the_content(); ?></p>
                            </div>
                            <?php
                            $i++;
                        endwhile;
                        echo '</div>';
                    else :
                        ?>
                        <h5>Nessun membro del team presente...</h5>
                    <?php
                    endif;
                    ?>
                </div>
            </section>

            <hr />

            <section class="row" id="istituzionale">
                <div class="col-xs-12">
                    <div class="row">
                        <div class="col-xs-12">
                            <p>Vincitore del concorso Principi Attivi 2012</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <section class="row">
                                <div class="col-xs-4">
                                    <div class="logo-istituzionale">
                                        <img src="<?php echo get_template_directory_uri(); ?>/images/ministero.jpg" />
                                    </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="logo-istituzionale">
                                        <img src="<?php echo get_template_directory_uri(); ?>/images/vincitore_vert_1.jpg" />
                                    </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="logo-istituzionale">
                                        <img src="<?php echo get_template_directory_uri(); ?>/images/regione.jpg" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section class="row" id="partners">
                <h4>Partners</h4>
                <div class="col-xs-12">
                    <section class="row">
                        <div class="col-xs-4">
                            <div class="logo-partner">
                                <img src="<?php echo get_template_directory_uri(); ?>/images/pop_hub.jpg" />
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="logo-partner">
                                <img src="<?php echo get_template_directory_uri(); ?>/images/logo-comune-02.png" />
                            </div>
                        </div>
                    </section>
                </div>
            </section>

<?php echo get_footer(); ?>
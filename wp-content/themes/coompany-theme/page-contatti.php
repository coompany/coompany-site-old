<?php
/**
 * Template Name: Contatti
 *
 * Created by PhpStorm.
 * Project: Coompany’s site
 * User: Andrea Jemmett - acidghost
 * Date: 12/07/14
 * Time: 19:37
 */

echo get_header();
?>

			<section class="row">
				<div class="col-xs-12" id="page-contatti">
					<?php $page_contatti = get_post(148);		// page 148 is Contatti ?>
					<h2>
                        <?php echo $page_contatti->post_title; ?>
                        <img src="<?php echo get_template_directory_uri(); ?>/images/icon_91.png" width="30" style="padding-bottom: 3px; margin-left: 5px;">
                    </h2>
					<div class="content">
						<?php echo apply_filters('the_content', $page_contatti->post_content); ?>
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
                                <a href="http://www.pophub.it/" target="_blank">
                                    <img src="<?php echo get_template_directory_uri(); ?>/images/pop_hub.jpg" />
                                </a>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="logo-partner">
                                <img src="<?php echo get_template_directory_uri(); ?>/images/logo-comune-02.png" />
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="logo-partner">
                                <a href="http://www.vuotiarendere.com/" target="_blank">
                                    <img src="<?php echo get_template_directory_uri(); ?>/images/vuotiarendere.png" />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

<?php echo get_footer(); ?>
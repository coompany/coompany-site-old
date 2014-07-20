<?php

 
function qcode_parse($string)
{ 
	$tags = 'color|col-lg|col-md|col-sm|col-xs'; 
	$del="|";
	preg_match_all('`\[('.$tags.')=?(.*?)\]`', $string, $matches);
	
	$Output['color']="#000000";
	$Output['col-lg']="6";
	$Output['col-md']="6";
	$Output['col-sm']="6";
	$Output['col-xs']="12";
	
	foreach ($matches[0] as $key => $match)
	{ 
		$tag=$matches[1][$key];
		$param=$matches[2][$key];
		
		switch ($tag) { 
			case 'color': $replacement = $tag."=".$param.$del; break; 
			case 'col-lg': $replacement = $tag."=".$param.$del; break; 
			case 'col-md': $replacement = $tag."=".$param.$del; break; 
			case 'col-sm': $replacement = $tag."=".$param.$del; break; 
			case 'col-xs': $replacement = $tag."=".$param.$del; break; 
		} 

		$string = str_replace($match, $replacement, $string); 
		
	}
	$string=explode($del,$string);
	unset($string[count($string)-1]);
	
	$QCode="";
	for($i=0;$i<count($string);$i++)
	{
		$QCode=explode("=",$string[$i]);
		
		$Output[$QCode[0]]=$QCode[1];
	}
	return $Output;
} 

$ListMenu="";

class wp_quilia_navwalker extends Walker_Nav_Menu {

	private $ParamsMenu="";
	private $HasSubMenu=false;
	private $ListSubMenu="";
	private $NMenu="";
	private $IDMenuActive="";
	
	public function start_lvl( &$output, $depth = 0, $args = array() ) {}
	
	public function end_lvl( &$output, $depth = 0, $args = array() )
	{
		global $ListMenu;
		
		if(!is_home() && is_array($ListMenu))
		{
			$output.='<div class="quilia-group-goccia col-lg-'.$ListMenu['Menu']['col'].' '.(($this->IDMenuActive==$ListMenu['Menu']['id']) ? 'active' :'').'"><div class="quilia-only-goccia"><div class="gocciaAnim"></div></div><div class="text-menu" data-id-menu="'.$ListMenu['Menu']['id'].'"><span class="title-menu">'.$ListMenu['Menu']['title'].'</span></div></div>';
			if(is_array($ListMenu['Submenu']))
			{
				$output.='<ul class="quilia-submenu" data-id="'.$ListMenu['Menu']['id'].'">';	
				for($i=0;$i<count($ListMenu['Submenu']);$i++)
				{
					$output.='<li '.($ListMenu['Submenu'][$i]['active'] ? 'class="active"' : '').'data-id="'.$ListMenu['Submenu'][$i]['id'].'"><a href="'.$ListMenu['Submenu'][$i]['url'].'">'.$ListMenu['Submenu'][$i]['title'].'</a></li>';
				}
				$output.='</ul>';
				
				if($this->IDMenuActive==$ListMenu['Menu']['id'])
				{
					$output.='<script>jQuery(document).ready(function($){showSubmenu($(\'.container-gocce .quilia-container ul.quilia-submenu[data-id="'.$this->IDMenuActive.'"]\'));});</script>';
				}
			}
		}
		
	}

	public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 )
	{
		if($depth==0)
		{
			$this->ParamsMenu=qcode_parse(str_replace(" ","",$item->description));
		}
		
		if(is_home())
		{
			//Primo livello - Genera onde + nome menu
			if($depth==0 && $args->sottomenu==0)
			{		
				$this->NMenu=$item->ID;
				$output.='<div class="quilia-onda col-lg-'.$this->ParamsMenu['col-lg'].' col-md-'.$this->ParamsMenu['col-md'].' col-sm-'.$this->ParamsMenu['col-sm'].' col-xs-'.$this->ParamsMenu['col-xs'].'">';	
				$this->HasSubMenu[$this->NMenu]=false;
				if($args->has_children)
				{	
					$this->HasSubMenu[$this->NMenu]=true;
					$output.='<div class="quilia-only-onda"><canvas data-id-menu="'.$this->NMenu.'" class="menu-onde" data-color="'.$this->ParamsMenu['color'].'"></canvas><ul>';
				}
			}
			else if($depth==1 && $args->sottomenu==1)//Primo livello - Genera lista sotto categorie
			{
				$output.="menu ".$item->description;
			}
			else if($depth==1) //Sotto menu di secondo livello (I MENU DELLE ONDE)
			{
				$countMenu=count($this->ListSubMenu[$this->NMenu])-1;
				$this->ListSubMenu[$this->NMenu][]=array('title'=>$item->title,'url'=>$item->url);
				$output.='<li><a href="'.$item->url.'">'.$item->title.'</a></li>';
			}
		}
		else
		{
			global $ListMenu;
			if($depth==0 && $args->sottomenu==0)
			{		
				$ListMenu['Menu']['col']='col-lg-'.$this->ParamsMenu['col-lg'].' col-md-'.$this->ParamsMenu['col-md'].' col-sm-'.$this->ParamsMenu['col-sm'].' col-xs-'.$this->ParamsMenu['col-xs'];
				$ListMenu['Menu']['id']=$item->ID;
				$ListMenu['Menu']['title']=$item->title;
				$ListMenu['Submenu']="";
			}
			else if($depth==1) //Sotto menu di secondo livello (I MENU DELLE ONDE)
			{
				$ListMenu['Submenu'][]=array('title'=>$item->title,'url'=>$item->url,'id'=>$item->ID,'active'=>(in_array("current_page_item",$item->classes) || in_array('current-menu-item',$item->classes)) ? '1' :   '0');
				if((in_array("current_page_item",$item->classes) || in_array("current-menu-item",$item->classes)) && $this->IDMenuActive=="")
				{
					$this->IDMenuActive=$ListMenu['Menu']['id'];
				}
			}
		}
	}
	
	public function end_el( &$output, $item, $depth = 0, $args = array(), $id = 0 )
	{
		if($depth==0)
		{
			$this->ParamsMenu="";
		}
	
		if(is_home())
		{
			//Primo livello - Genera onde + nome menu
			if($depth==0 && $args->sottomenu==0)
			{
				if($this->HasSubMenu[$this->NMenu])
				{
					$output.='</ul></div>';	
				}
				$output.='<div class="text-menu" data-id-menu="'.$this->NMenu.'">'.$item->title.'</div>';
				
				$output.='</div>';
				$this->NMenu="";	
			}
		}
	}

	/**
	 * Traverse elements to create list from elements.
	 *
	 * Display one element if the element doesn't have any children otherwise,
	 * display the element and its children. Will only traverse up to the max
	 * depth and no ignore elements under that depth.
	 *
	 * This method shouldn't be called directly, use the walk() method instead.
	 *
	 * @see Walker::start_el()
	 * @since 2.5.0
	 *
	 * @param object $element Data object
	 * @param array $children_elements List of elements to continue traversing.
	 * @param int $max_depth Max depth to traverse.
	 * @param int $depth Depth of current element.
	 * @param array $args
	 * @param string $output Passed by reference. Used to append additional content.
	 * @return null Null on failure with no changes to parameters.
	 */
	public function display_element( $element, &$children_elements, $max_depth, $depth, $args, &$output )
	{
        if ( ! $element )
            return;
        $id_field = $this->db_fields['id'];

        // Display this element.
        if ( is_object( $args[0] ) )
           $args[0]->has_children = ! empty( $children_elements[ $element->$id_field ] );

        parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
    }

	/**
	 * Menu Fallback
	 * =============
	 * If this function is assigned to the wp_nav_menu's fallback_cb variable
	 * and a manu has not been assigned to the theme location in the WordPress
	 * menu manager the function with display nothing to a non-logged in user,
	 * and will add a link to the WordPress menu manager if logged in as an admin.
	 *
	 * @param array $args passed from the wp_nav_menu function.
	 *
	 */
	public static function fallback( $args )
	{
		if ( current_user_can( 'manage_options' ) ) {

			extract( $args );

			$fb_output = null;

			if ( $container ) {
				$fb_output = '<' . $container;

				if ( $container_id )
					$fb_output .= ' id="' . $container_id . '"';

				if ( $container_class )
					$fb_output .= ' class="' . $container_class . '"';

				$fb_output .= '>';
			}

			$fb_output .= '<ul';

			if ( $menu_id )
				$fb_output .= ' id="' . $menu_id . '"';

			if ( $menu_class )
				$fb_output .= ' class="' . $menu_class . '"';

			$fb_output .= '>';
			$fb_output .= '<li><a href="' . admin_url( 'nav-menus.php' ) . '">Aggiungi men&ugrave;</a></li>';
			$fb_output .= '</ul>';

			if ( $container )
				$fb_output .= '</' . $container . '>';

			echo $fb_output;
		}
	}
}

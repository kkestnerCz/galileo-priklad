;<?php die(""); ?>

[default]
	languages[] = "cs"              ;definice seznamu jazyku
	languages[] = "sk"              ;definice seznamu jazyku
	languages[] = "en"              ;definice seznamu jazyku
	default_lang = cs               ;definovani defaultniho jazyka

	copyright["cs"] = "Oficiální stránky obce XY"        ;definice copyrightu pro dany jazyk
	copyright["sk"] = "Oficiálna stránky obce XY"        ;definice copyrightu pro dany jazyk
	copyright["en"] = "Oficiální stránky obce XY"        ;definice copyrightu pro dany jazyk
	typ_webu = 1										;1-Obec,2-Městys,3-Město,4-Statutární město,5-Hlavní město,6-Vojenský újezd,7-Hrady a zámky,8-Mateřské školy,9-Základní školy,10-Střední školy,11-Vysoké školy,12-Knihovny,13-Muzea,14-Mikroregiony,15-Místní akční skupiny (MAS),16-Obecně prospěšné společnosti (OPS),17-Turisticko informační centra,18-Spolky,19-Realitní kanceláře,20-Krajské úřady,21-Ministerstva,22-Ostatní příspěvkové organizace,23-Komerční sektor,24-Jiná,25-Ostatní školy,26-Interní
	created = 20.5.2020            ;datum vytvoreni webu
	server = lepus                 ;sever kde bezi web

	col_admin_left = 1							;administrace leveho sloupce 1-ano,0-ne
	col_admin_right = 1							;administrace praveho sloupce 1-ano,0-ne

    hf_max_width_picture = 2000		;maximalni sirka ulozeneho obrazku na disku (melo by byt stejne jako sirka hf_header)
    hf_header[] = "1920x480"		;S - 1920x384, M - 1920x480, L - 1920x640 definice sirky, vysky hlaviceky pro zobrazovani obrazku pomoci slideshow,vzdy definovat do pole, 0,empty-nezobrazuje se

    kak_autor = "Obec Nová ves"		;nazev autora akci
    kak_misto["CZ0323554791"] = "Nová ves"
    ico = 46744941					;ico webu

    rozcesti_boxu = 3								;pocet boxu vedle sebe v obsahu
    rozcesti_config = '247x183,10,13'	;konfigurace rozcesti: [sirka_obrazku]x[vyska_obrazky],[sirka_ramecku],[sirka_mezery]

    tit_rss = 0											;pouziti RSS do sloupcu z titulky

    tts_enable = 0									;povolit kecalka

    ;dalsi umisteni
    mini_module_template["TPL_MINI_FULLTEXT"] = fulltextsearch,Vyhledávání
    mini_module_template["TPL_MINI_EDITOR_TEL"] = editor,telefon					;<p><a class="mr-4 mr-md-8" href="tel:+420321456987"><i class="far fa-phone mr-2">​​</i><span class="sr-only-m">+420 321&nbsp;456&nbsp;987</span></a></p>
    mini_module_template["TPL_MINI_EDITOR_EMAIL"] = editor,e-mail					;<p><a href="mailto:info@domenaobce.cz"><i class="far fa-envelope mr-2">​&#x200B;</i><span class="sr-only-m">info@domenaobce.cz</span></a></p>
    mini_module_template["TPL_MINI_EDITOR_MOBILE_TEL"] = editor,mobile - telefon	;<p><a href="tel:+420321456987"><i class="far fa-phone"><span class="sr-only">+420 321&nbsp;456&nbsp;987</span></i></a></p>
    mini_module_template["TPL_MINI_EDITOR_MOBILE_EMAIL"] = editor,mobile - e-mail	;<p><a href="mailto:info@domenaobce.cz"><i class="far fa-envelope"><span class="sr-only">info@domenaobce.cz</span></i></a></p>

	;mini_module_template["TPL_MINI_NEWSLETTER"] = newsletter, informace e-mailem
	;mini_module_template["TPL_MINI_FORM"] = formulare_mini, kontaktní formulář
	;mini_module_template["TPL_MINI_MINITRANSLATOR"] = minitranslator, minitranslator

    col_box_types_r = 1							;kolik typu boxu mame (pro styly) vpravo
	col_box_types_l = 1							;kolik typu boxu mame (pro styly) vlevo

    lockcontent_advanced = 1
    ;pokud maji pocitadlo pristupu
	;counter_ram1[] = 255						;barva vnejsiho okraje kolem obrazku (red)
	;counter_ram1[] = 255						;barva vnejsiho okraje kolem obrazku (green)
	;counter_ram1[] = 255						;barva vnejsiho okraje kolem obrazku (blue)
	;counter_ram2[] = 58						;barva vnitrniho okraje kolem obrazku (red)
	;counter_ram2[] = 58						;barva vnitrniho okraje kolem obrazku (green)
	;counter_ram2[] = 58						;barva vnitrniho okraje kolem obrazku (blue)
	;counter_box1[] = 170						;barva praveho boxu (red)
	;counter_box1[] = 169						;barva praveho boxu (green)
	;counter_box1[] = 166						;barva praveho boxu (blue)
	;counter_box2[] = 119						;barva leveho boxu (red)
	;counter_box2[] = 118						;barva leveho boxu (green)
	;counter_box2[] = 115						;barva leveho boxu (blue)
	;counter_text[] = 255						;barva textu (red)
	;counter_text[] = 255						;barva textu (green)
	;counter_text[] = 255						;barva textu (blue)
	;counter_tbl_config = 2					;velikost pisma pro tabulkovy vypis: 1 => 6, 2 => 8, 3 => 10
	css_no_external = 1							;zakaze pouziti zvlastnich css pro rezervace, vodni toky, events, teplomery, seniory, tts
	dis_usable = 0									;ma se pouzivat (zobrazovat) diskuze
	editor_content_size = 765				;sirka pro omezeni pri vkladani obrazku od editoru
	editor_minicontent_size = 235		;sirka pro omezeni pri vkladani obrazku od minieditoru
	editor_disable_fonts = 1				;zruseni moznosti vyberu fontu
	editor_disable_textcolor = 1		;zruseni moznosti vyberu barvy textu

	gal_pictures_on_page = 12				;defaultni pocet obrazku v galerii na strance
	gal_min_pictures = 6						;minimalni pocet obrazku
	gal_max_pictures = 48						;maximalni pocet obrazku

	hf_header_tech = 64							;definice pouzivanych technologii 1-slideshow2, 2-slideshow image, 4-scrollable,8-slide menu (pokud chci vse 1+2+4+8=15), 16-anythingSlider (styly vybrat ze spindlu)
	hfSwiperConfig = 1						;konfiruace swiperu přes administraci
	hf_footer_boxes[] = 216					;rozmery prvniho boxu v paticce
	hf_footer_boxes[] = 216				;rozmery druheho boxu v paticce
	hf_footer_boxes[] = 216			;rozmery tretiho boxu v paticce
	hf_footer_boxes[] = 216			;rozmery ctvrteho boxu v paticce
	kak_per_page = 10								;defaultni pocet zaznamu na stranku
    kty_sez_osob_vypis = 1

	langtext_use = 5	;0 - vlajecky, 1 - slovne velka pismena, 2 - slovne mala pismena, 3 - slovne prvni velke, 4 - zkratka mala pismena, 5 - zkratka velka pismena
    detect_language = 0             ;zda ma web detekovat jazyk na titulce (podle nastaveneho jazyka v prohlizeci prepne na pozadovany jazyk)
    startathome = 1									;1 = existuje samostatna prvni stranka, 0 - bere prvni stranku jako prvni polozku menu
    more_symbol = " ..."            ;definice symbolu pro vice
    navi_symbol = "&nbsp;&nbsp;/&nbsp; "  ;definice symbolu pro navigaci (symbol vypisovany v drobeckove navigaci mezi polozkami)
	lup_show = 1										;zobrazeni posledni aktualizace na strankach
	lup_date_format = "j. n. Y"				;format vystupniho datumu/casu pro modul lastupdate, viz.funkce date()
	lup_global = 1									;1 pro zobrazeni nejnovejsiho data, jinak pro kazdy $active zvlast
	mnu_bigmenu = 1					;ve strukture stranek, administraci obsahu a mutiuziv.administraci zobraze select pro vypis podpolozek od vybrane polozkt
	mnu_gen_class = 0								;ma se do polozek menu generovat tridy (promenna urcuje pocet trid)
	mnu_use_redirect = 1						;menu "pekne" URL
	mnu_max_level = 5								;maximalni hloubka menu
	mnu_sys_lang = true							;pouzivat jazykove mutace ??
	mnu_multimenu = 0								;jestli se maji polozky v hloubce 1 brat jako root pro menu (kdyz bych mel 4 polozky v menu tak bych mel jakoby 4 menu)
	mnu_css = 1											;zda se ma rendrovat menu pro pouziti css menu (najizdeci rozbalovaci), param: 1|2|1,2...
	mnu_split = 1										;ma se menu rendrovat na dve casti, prvni uroven a zbytek
	mnu_split_primselalways = 1			;ma se vybrat vzdy polozka z primarniho menu? (jestli se ma vybrat polozka, kdyz zobrazuji např. mapu_webu...)
	mnu_allways_show_deep = 1				;do jake hloubky ma byt vzdycky rozbalene menu
	mnu_show_hidden_item = 0				;v administraci se maji zobrazovat polozky, kde uzivatel nema pravo
	mnu_use_tabs = 1								;umoznit uzivateli nastavit si podpolozky jako zalozky
    ;poradi komponent
	;mpOrderNews = 'name,date,type,picture,perex,source'
    ;mpOrderMix = 'date,name,type,picture,perex,source'
    ;mpOrderActions = 'name,date,type,picture,perex,source'
    ;mpOrderDesk = 'name,date,type,picture,perex,source'
    ;mpOrderGallery = 'picture,name,date'
	poc_enable_owm = true						;pocasi - povolit moznost pocasi z openweathermap.org
	poc_sprites = [NONADMIN_SKINDIR]images/pocasi/weather-sprites.svg
	pristupnost_end = ', '			;text za prohlaseni o pristupnsti do paticky

	sys_kvota = 10240									;nastaveni velikosti zabrani na disku v MB
	print_show = 1					;zobrazeni tisku stranky



	;vlozeni javasciptu pro potreby skinu
	skin_js[] = "[BASE_HREF]js/jquery.min.js" ; melo by se pouzit misto statickeho serveru
	skin_js[] = "[NONADMIN_SKINDIR]js/scripts.min.js"
	skin_js[] = "[NONADMIN_SKINDIR]js/swiperInit.js"
	skin_responsive = 1
	gcmUseBootstrap = 1
;bootstrap
	skin_js[] = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"
	skin_js[] = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
;mmenu
	skin_css[] = "https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/7.0.6/jquery.mmenu.all.css"
	skin_js[] = "https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/7.0.6/jquery.mmenu.all.js"
	skin_css[] = "[BASE_HREF]js/jquery.mhead/jquery.mhead.css"
	skin_js[] = "[BASE_HREF]js/jquery.mhead/jquery.mhead.js"

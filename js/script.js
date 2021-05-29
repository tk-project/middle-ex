$(function () {

	// ハンバーガーメニュー
	$(function () {
		var dis = 100;
		// .ハンバーガーボタンかハンバーガーメニューをクリックしたらハンバーガーメニューを閉じる
		$('.btn-trigger , .hamburger__menu_link').click(function () {
			$('.hamburger__menu').animate({ 'margin-left': '+=' + dis + '%' }, 300);
			dis *=-1;
		});
		// ハンバーガーボタンの開閉
		$('.btn-trigger , .hamburger__menu_link').on('click', function() {
			$('.btn-trigger ').toggleClass('active');
			// return false;
		});
	});

	// スクロールで色が変わるヘッダー
	// 背景色を白に
	jQuery(window).on('scroll', function () {
	 if (jQuery(this).scrollTop()) { 
		 jQuery('.top').addClass('change-bg');
	 } else {
			jQuery('.top').removeClass('change-bg');
		}
	});
	// 色を黒に
	jQuery(window).on('scroll', function () {
	 if (jQuery(this).scrollTop()) { 
		 jQuery('.nav__link').addClass('change-color');
	 } else {
			jQuery('.nav__link').removeClass('change-color');
		}
	});
	jQuery(window).on('scroll', function () {
	 if (jQuery(this).scrollTop()) { 
		 jQuery('.btn-trigger-bar').addClass('change-bgcolor');
	 } else {
			jQuery('.btn-trigger-bar').removeClass('change-bgcolor');
		}
	});
	// ロゴを黒に
	jQuery(window).on('scroll', function () {
	 if (jQuery(this).scrollTop()) { 
		 jQuery('.top__logo').attr('src', 'img/sub-header-logo.png');
	 } else {
			jQuery('.top__logo').attr('src', 'img/top-header-logo.png');
		}
	});

	// モーダル
	$('.js-modal-open').on('click',function(){
		$('.js-modal').fadeIn();
		return false;
});
$('.js-modal-close').on('click',function(){
		$('.js-modal').fadeOut();
		return false;
});

	// フェードスライダー
	let mySwiper = new Swiper(".swiper-container", {
		// Optional parameters
		loop: true, // ループの指定
		effect: "fade", //フェードの指定
		autoplay: {
				delay: 4000, //４秒後に次のスライドへ
				disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
		},
		speed: 2000, //２秒かけてフェードで切り替わる
		pagination: { // 丸のページネーションを使うなら書く
				el: ".swiper-pagination",
				clickable: true //クリックを有効化する
		},
		navigation: { // 左右のページ送を使うなら書く
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
		}
	});

	// お問合せ完了メッセージ
	$('#form').submit(function (event) {
		var formData = $('#form').serialize();
		$.ajax({
			url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSda1gT_iIMkrZPBQFI5I0TyIewU-H4eXUbNb8wZXiMZDcGrMQ/formResponse",
			data: formData,
			type: "POST",
			dataType: "xml",
			statusCode: {
				0: function () {
					$(".end-message").slideDown();
					$(".submit-btn").fadeOut();
					//window.location.href = "thanks.html";
				},
				200: function () {
					$(".false-message").slideDown();
				}
			}
		});
		event.preventDefault();
	});

	
	// フェードイン
	$(function () {
		$(window).scroll(function () {
			$(".effect-fade").each(function () {
				var elemPos = $(this).offset().top; /* 要素の位置を取得 */
				var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
				var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
				if (scroll > elemPos - windowHeight) {
					/* 要素位置までスクロール出来たときに動作する */
					$(this).addClass("effect-scroll");
				}
			});
		});
		jQuery(window).scroll();
	});


	
	// スムーススクロール
	$(function(){
		$('a[href^="#"]').click(function () {
			// 移動先を100px上にずらす
			var adjust = 100;
			// スクロールの速度
			var speed = 500;
			// アンカーの取得
			var href = $(this).attr("href");
			// 移動先を取得
			var target = $(href == "#" || href == "" ? 'html' : href);
			// 移動先を調整
			var position = target.offset().top - adjust;
			// スムーススクロール
			$("html, body").animate({scrollTop:position}, speed, "swing");
			return false;
		});
	});

	// タブ
	$(function() {
		let tabs = $(".tab"); // tabのクラスを全て取得し、変数tabsに配列で定義
		$(".tab").on("click", function() { // tabをクリックしたらイベント発火
			$(".active").removeClass("active"); // activeクラスを消す
			$(this).addClass("active"); // クリックした箇所にactiveクラスを追加
			const index = tabs.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
			$(".content").removeClass("show").eq(index).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
		})
	})
	
	AOS.init()
});

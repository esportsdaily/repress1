//Theme Switcher Js
const Switch = document.querySelector(".switcher-toggle");
const Themes = document.querySelector("#styles-switcher");

Switch.addEventListener("click", () => {
        Themes.classList.toggle("show")
    })
    //Jquery
    ! function(a) {
        a("#styles-switcher ul li").on("click", function() {
            var b = a(this).data("path");
            a("#color-switcher").attr("href", b);
            a(this).parent().find("li").removeClass("active");
            a(this).addClass("active");
        });
        a("#reset-color").on("click", function() {
            a("#color-switcher").removeAttr("href");
            a("#styles-switcher ul li").parent().find("li").removeClass("active");
        });
    }(jQuery);
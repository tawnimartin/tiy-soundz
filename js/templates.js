this["JST"] = this["JST"] || {};
this["JST"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return " <div class=\"view-btns\">\n  	<div class=\"glyph\"><span class=\"glyph-item mega eye\" aria-hidden=\"true\" data-icon=\"&#xe087;\" data-js-prompt=\"&amp;#xe005;\"></span>\n  	</div>\n  	<div class=\"glyph\"><span class=\"glyph-item mega txt\" aria-hidden=\"true\" data-icon=\"&#xe067;\" data-js-prompt=\"&amp;#xe005;\"></span>\n  	</div>\n  </div><div class=\"logo\">SOUNDZ</div>\n  <div class=\"search\">\n  </div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["search"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form>\n      <label>\n       <i class=\"fa fa-search\"></i> <input id=\"search\" type=\"text\" name=\"search\" placeholder=\"search for a song\" />\n      </label>\n   </form>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["search_box"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "<img src=\""
    + this.escapeExpression(((helper = (helper = helpers.artwork_url || (depth0 != null ? depth0.artwork_url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"artwork_url","hash":{},"data":data}) : helper)))
    + "\">";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"box\">"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.artwork_url : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n      <div class=\"genre\">"
    + alias3(((helper = (helper = helpers.genre || (depth0 != null ? depth0.genre : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"genre","hash":{},"data":data}) : helper)))
    + "</div>\n      <div class=\"title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n\n      <div class=\"buttons\"><div class=\"play\">\n        <div class=\"glyph\"><span class=\"glyph-item mega play-show\" aria-hidden=\"true\" data-icon=\"&#xe071;\" data-js-prompt=\"&amp;#xe005;\"></span><span class=\"glyph-item mega pause-show\" aria-hidden=\"true\" data-icon=\"&#xe072;\" data-js-prompt=\"&amp;#xe005;\"></span>\n        </div>\n      </div>\n      <div class=\"fav\">\n        <div class=\"glyph\"><span class=\"glyph-item mega\" aria-hidden=\"true\" data-icon=\"&#xe095;\" data-js-prompt=\"&amp;#xe005;\"></span>\n        <span class=\"glyph-item mega\" aria-hidden=\"true\" data-icon=\"&#xe08a;\" data-js-prompt=\"&amp;#xe005;\"></span>\n        </div>\n      </div></div>\n    </div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["track_collection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div></div>";
},"useData":true});
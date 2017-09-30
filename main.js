var hbs = require("handlebars")
var fs = require("fs")

var tpl_string = fs.readFileSync("./test/tpl.xml").toString()

var tpl = hbs.compile(tpl_string)

var out = tpl({ title: "云浮市简介", content: "云浮（官方音译：Yunfu，传统外文：Wanfow）是中华人民共和国广东省下辖的地级市，位于广东省西部。市境北靠肇庆市，东邻佛山市，南接江门市、阳江市、茂名市，西界广西壮族自治区梧州市。地处北回归线南面，珠江三角洲以西，西江南岸山地丘陵区，天露山、云雾山与云开大山的北部分支，主要地貌为低山及狭长的河谷盆地。西江支流罗定江、新兴江流经境内。全市总面积7,785平方公里，总人口246.05万。云浮过去盛产大理石（云石），现以加工大理石闻名。" })

fs.writeFileSync("./test/out/out.doc", out)
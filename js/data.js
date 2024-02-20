$(function () {

    //每一個人都各自有一個{資料} 避免有後代的話還要傳{}進去造成回呼地獄
    // name: "", info: 1, spouse: "", SPinfo: 1, infoData:"",SPinfoData:"",children: children:[小,大]
    //是女婿的話多加SonLaw: 1 例如林魁
    // window.(幾世)(上一代的排行)_(自家排行)




    //七世
    window.seven1_1 = window.seven1_1 || {};
    window.seven1_1.data = { name: "郭鎮源", info: 1, spouse: 0, children: 0, infoData: `<h5>【七世】</h5>生於1992年12月16日<br>` };
    window.seven1_2 = window.seven1_2 || {};
    window.seven1_2.data = { name: "郭雅云", info: 1, spouse: 0, children: 0, infoData: `<h5>【七世】</h5>生於1995年5月2日<br>` };
    window.seven3_1 = window.seven3_1 || {};
    window.seven3_1.data = {
        name: "郭宇衡", info: 1, spouse: 0, children: 0, infoData: `<h5>【七世】</h5><ul>
    <li>生於1998年11月25日</li></ul>` };
    window.seven4_1 = window.seven4_1 || {};
    window.seven4_1.data = {
        name: "郭敏郎", info: 1, spouse: 0, children: 0, infoData: `<h5>【七世】</h5><ul>
    <li>生於1998年7月10日</li></ul>` };
    window.seven4_2 = window.seven4_2 || {};
    window.seven4_2.data = { name: "郭啟仁", info: 1, spouse: 0, children: 0, infoData: `<h5>【七世】</h5>` };
    window.seven7_1 = window.seven7_1 || {};
    window.seven7_1.data = {
        name: "郭家瑜", info: 1, spouse: 0, children: 0, infoData: `<h5>【七世】</h5><ul>
    <li>生於1996年9月30日</li></ul>` };
    window.seven7_2 = window.seven7_2 || {};
    window.seven7_2.data = {
        name: "郭泳青", info: 1, spouse: 0, children: 0, infoData: `<h5>【七世】</h5><ul>
    <li>生於2000年</li></ul>` };
    window.seven8_1 = window.seven8_1 || {};
    window.seven8_1.data = {
        name: "郭培弘", info: 1, spouse: 0, children: 0, infoData: `<h5>【七世】</h5><ul>
    <li>生於1999年8月31日</li></ul>` };
    window.seven8_2 = window.seven8_2 || {};
    window.seven8_2.data = {
        name: "郭培德", info: 1, spouse: 0, children: 0, infoData: `<h5>【七世】</h5><ul>
    <li>生於2000年9月21日</li></ul>` };
    window.seven9_1 = window.seven9_1 || {};
    window.seven9_1.data = { name: "郭少恩", info: 1, spouse: 0, children: 0, infoData: `<h5>【七世】</h5>` };
    window.seven9_2 = window.seven9_2 || {};
    window.seven9_2.data = { name: "郭雪恩", info: 1, spouse: 0, children: 0, infoData: `<h5>【七世】</h5>` };
    window.seven9_3 = window.seven9_3 || {};
    window.seven9_3.data = { name: "郭愛恩", info: 1, spouse: 0, children: 0, infoData: `<h5>【七世】</h5>` };


    //六世
    window.sixAdd1_1 = window.sixAdd1_1 || {};
    window.sixAdd1_1.data = { name: "郭光世", info: 0, spouse: 0, children: 0, infoData: 0 };
    window.sixAdd1_2 = window.sixAdd1_2 || {};
    window.sixAdd1_2.data = { name: "郭春廷", info: 0, spouse: 0, children: 0, infoData: 0 };
    window.sixAdd2_1 = window.sixAdd2_1 || {};
    window.sixAdd2_1.data = { name: "郭汝耕", info: 0, spouse: 0, children: 0, infoData: 0 };
    window.sixAdd2_2 = window.sixAdd2_2 || {};
    window.sixAdd2_2.data = { name: "郭俊良", info: 0, spouse: 0, children: 0, infoData: 0 };
    window.sixAdd3_1 = window.sixAdd3_1 || {};
    window.sixAdd3_1.data = { name: "郭茂男", info: 0, spouse: 0, children: 0, infoData: 0 };
    window.sixAdd3_2 = window.sixAdd3_2 || {};
    window.sixAdd3_2.data = { name: "郭晃典", info: 0, spouse: 0, children: 0, infoData: 0 };
    window.sixAdd4_1 = window.sixAdd4_1 || {};
    window.sixAdd4_1.data = { name: "郭肇聰", info: 0, spouse: 0, children: 0, infoData: 0 };
    window.sixAdd4_2 = window.sixAdd4_2 || {};
    window.sixAdd4_2.data = { name: "郭肇隆", info: 0, spouse: 0, children: 0, infoData: 0 };
    window.sixAdd5_1 = window.sixAdd5_1 || {};
    window.sixAdd5_1.data = { name: "郭博文", info: 0, spouse: 0, children: 0, infoData: 0 };
    window.sixAdd5_2 = window.sixAdd5_2 || {};
    window.sixAdd5_2.data = { name: "郭博達", info: 0, spouse: 0, children: 0, infoData: 0 };


    window.six1_1 = window.six1_1 || {};
    window.six1_1.data = {
        name: "郭育均", info: 1, spouse: "林魁", SonLaw: 1, SPinfo: 1, SPinfoData: `生於1956年5月9日<br>`, children: 0, infoData: `<h5>【六世】</h5>
    <ul>
    <li><small>原名: </small>淑芬</li>
    <li>生於1958年10月12日</li>
    <li>淡水文理學院外文系畢業</li>
    </ul>
    ` };
    window.six1_2 = window.six1_2 || {};
    window.six1_2.data = {
        name: "郭承棟", info: 1, spouse: "吳秀英", children: [seven1_2.data, seven1_1.data], infoData: `
    <h5> <img width="70px" src="./img/郭承棟.png" alt="郭承棟" class="img-fluid">【六世】</h5>
    <ul>
    <li>生於1963年5月8日</li>
    <li>台南長榮高中畢業</li>
    <li>玉記行老闆</li>
    </ul> `, SPinfo: 1, SPinfoData: `生於1965年7月15日`,
    };
    window.six3_1 = window.six3_1 || {};
    window.six3_1.data = {
        name: "郭懿嬋", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5><small>原名: </small>素珠<ul>
    <li>生於1957年4月23</li></ul>` };
    window.six3_2 = window.six3_2 || {};
    window.six3_2.data = {
        name: "郭素華", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5>
    <ul>
    <li>生於1960年10月30日</li>
    <li>台南家齊女中畢業</li>
    </ul>
    ` };
    window.six3_3 = window.six3_3 || {};
    window.six3_3.data = {
        name: "郭承昌", info: 1, spouse: "楊文琦", SPinfo: 1, SPinfoData: "生於1967年9月28日", children: [seven3_1.data], infoData: `<h5>【六世】</h5>
    <ul>
    <li>生於1962年4月14日</li>
    </ul>
    ` };
    window.six4_1 = window.six4_1 || {};
    window.six4_1.data = {
        name: "郭雯蘭", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5> <ul>
    <li>生於1963年10月6日</li></ul>` };
    window.six4_2 = window.six4_2 || {};
    window.six4_2.data = {
        name: "郭凱寧", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5><small>原名: </small>惠吟 <ul>
    <li>生於1965年5月2日</li></ul>` };
    window.six4_3 = window.six4_3 || {};
    window.six4_3.data = {
        name: "郭承榮", info: 1, spouse: "蔡淳淳", SPinfo: 1, SPinfoData: "生於1969年5月11日", children: [seven4_2.data, seven4_1.data], infoData: `<h5>【六世】</h5><ul>
    <li>生於1966年5月11</li></ul>` };
    window.six4_4 = window.six4_4 || {};
    window.six4_4.data = {
        name: "郭錦慧", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5><ul>
    <li>生於1968年9月23</li><li>聲樂家</li>
    <li>畢業於加拿大蒙特利爾大學聲樂碩士</li>
    <li>義大利其嘉納音樂學院大師班</li>
    </ul>` };
    window.six4_5 = window.six4_5 || {};
    window.six4_5.data = {
        name: "郭瑞華", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5><ul>
    <li>生於1972年3月24</li></ul>` };
    window.six4_6 = window.six4_6 || {};
    window.six4_6.data = {
        name: "郭錦玲", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5><ul>
    <li>生於1973年10月9</li></ul>` };
    window.six7_1 = window.six7_1 || {};
    window.six7_1.data = {
        name: "郭政岡", info: 1, spouse: "林玉禎", SPinfo: 1, SPinfoData: "生於1968年9月11日", children: [seven7_2.data, seven7_1.data], infoData: `<h5>【六世】</h5><small>原名: </small>承弦<ul>
    <li>生於1966年3月3</li></ul>` };
    window.six7_2 = window.six7_2 || {};
    window.six7_2.data = {
        name: "郭佩儀", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5><ul>
    <li>生於1968年10月23</li></ul>` };
    window.six7_3 = window.six7_3 || {};
    window.six7_3.data = {
        name: "郭純霓", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5><ul>
    <li>生於1973年3月15</li></ul>` };
    window.six8_1 = window.six8_1 || {};
    window.six8_1.data = {
        name: "郭承祥", info: 1, spouse: "王惠禎", SPinfo: 1, SPinfoData: "生於1969年7月13日", children: [seven8_2.data, seven8_1.data], infoData: `<h5>【六世】</h5><ul>
    <li>生於1966年2月22</li></ul>` };
    window.six8_2 = window.six8_2 || {};
    window.six8_2.data = {
        name: "郭靜恩", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5><ul>
    <li>生於1968年11月19</li></ul>` };
    window.six8_3 = window.six8_3 || {};
    window.six8_3.data = {
        name: "郭靜芳", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5><ul>
    <li>生於1970年9月14</li></ul>` };
    window.six8_4 = window.six8_4 || {};
    window.six8_4.data = {
        name: "郭靜玲", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5><ul>
    <li>生於1974年10月29</li></ul>` };
    window.six9_1 = window.six9_1 || {};
    window.six9_1.data = {
        name: "郭靜津", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5><ul>
    <li>生於1970年5月29</li></ul>` };
    window.six9_2 = window.six9_2 || {};
    window.six9_2.data = {
        name: "郭靜黛", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5><ul>
    <li>生於1971年4月19</li></ul>` };
    window.six9_3 = window.six9_3 || {};
    window.six9_3.data = {
        name: "郭靜蓉", info: 1, spouse: 0, children: 0, infoData: `<h5>【六世】</h5><ul>
    <li>生於1972年5月20</li></ul>` };
    window.six9_4 = window.six9_4 || {};
    window.six9_4.data = {
        name: "郭承峰", info: 1, spouse: "楊麟鈞", children: [seven9_3.data, seven9_2.data, seven9_1.data], infoData: `<h5>【六世】</h5><ul>
    <li>生於1976年1月27</li></ul>` };

    //五世
    window.five1_1 = window.five1_1 || {};
    window.five1_1.data = { name: "郭振元", info: '洪氏', spouse: 0, children: [sixAdd1_2.data, sixAdd1_1.data], infoData: `<h5>【五世】</h5>` };
    window.five1_2 = window.five1_2 || {};
    window.five1_2.data = { name: "郭振欽", info: 0, spouse: 0, children: [sixAdd2_2.data, sixAdd2_1.data], infoData: 0 };
    window.five1_3 = window.five1_3 || {};
    window.five1_3.data = { name: "郭振熀", info: 0, spouse: 0, children: [sixAdd3_2.data, sixAdd3_1.data], infoData: 0 };
    window.five1_4 = window.five1_4 || {};
    window.five1_4.data = { name: "郭振枝", info: 0, spouse: 0, children: [sixAdd4_2.data, sixAdd4_1.data], infoData: 0 };
    window.five1_5 = window.five1_5 || {};
    window.five1_5.data = {
        name: "郭振純", info: 1, spouse: 0, children: 0, infoData: 0, infoData: `<h5>【六世】
        </h5><ul>
    <li>生於1925年</li>
    <li>卒於2018年</li>
    <li>1937年畢業後就讀高雄州立屏東農校</li>
    <li>1951年，郭振純幫忙葉廷珪參選臺南市長時認識 <a href="https://zh.wikipedia.org/wiki/%E4%B8%81%E7%AA%88%E7%AA%95">丁窈窕</a>，  
    </br>兩人因志趣相投相戀。</br>
    但郭男考慮參與社會運動會彼此拖累，而解除婚約
    </li>
    <li>1953年5月20日由於不肯指認葉廷珪是廖文毅的同夥</br>而遭到逮捕刑求。 </li>
    <li>1954年11月18日，被以「參加叛亂之集會」罪名判處無期徒刑，  </br>褫奪公權終身，移往新店安坑軍人監獄、綠島新生訓</li>
    <li>1975年，由於蔣介石過世，郭振純獲得減刑特赦，得以開釋出獄。  </br>到他7月14日離開為止，他在牢獄中度過22年54日</li>
    <li>2004年起，他開始不停地參與白色恐怖口述史工作</li>
    <li>2008年將自身的故事寫成小說《耕甘藷園的人》出版</li>
    </ul>` };

    window.five4_0 = window.five4_0 || {};
    window.five4_0.data = { name: "郭振利", info: 1, spouse: 0, children: 0, infoData: `小時候夭折` };
    window.five4_1 = window.five4_1 || {};
    window.five4_1.data = {
        name: "郭振益", info: 1, spouse: "郭王錦梅", children: [six1_2.data, six1_1.data], infoData: `<h5><img width="70px" src="./img/郭振益.png" alt="郭振益" class="img-fluid">【五世】</h5> 
    <ul>
    <li>生於1926年12月14日</li>
    <li>卒於2017年8月10日</li>
    <li>與郭蔡清雲離婚，再娶郭王錦梅</li>
    <li>初中畢業</li>
    <li>曾任榮美有限公司(批發業)推廣課長</li>
    <li>玉記行(批發業)店員</li>
    </ul>
    `, SPinfo: 1, SPinfoData: `
    <img width="70px" src="./img/郭王錦梅.png" alt="郭王錦梅" class="img-fluid">
    <ul>
    <li>生於1935年5月13日</li>
    <li>卒於2023年1月2日 </li>
    <li>國民小學畢業</li>
    <li>曾任榮美有限公司(批發業)外銷、課長</li>
    <li>曾任玉記行店員</li>
    </ul>
    `,
    };
    window.five4_2 = window.five4_2 || {};
    window.five4_2.data = {
        name: "郭月裡", info: 1, spouse: 0, children: 0, infoData: `<h5>【五世】</h5> <ul>
    <li>生於1928年2月19日</li></ul>` };
    window.five4_3 = window.five4_3 || {};
    window.five4_3.data = {
        name: "郭振木", info: 1, spouse: "郭鄭月昭", children: [six3_3.data, six3_2.data, six3_1.data],
        infoData: `<h5>【五世】</h5>
     <ul>
    <li>生於1929年8月20日</li>
    <li>卒於吉日</li>
    <li>國民小學畢業</li>
    <li>曾做過畫師(自由業)</li>
    <li>曾任玉記號(零售)店員</li>
    <li>曾任榮美有限公司(批發業)外銷、課長</li>
    <li>玉記行辦事員、老闆</li>
    </ul>` , SPinfo: 1, SPinfoData: `生於1934年12月20日`
    };
    window.five4_4 = window.five4_4 || {};
    window.five4_4.data = {
        name: "郭振福", info: 1, spouse: "郭胡明玉", children: [six4_6.data, six4_5.data, six4_4.data, six4_3.data, six4_2.data, six4_1.data],
        infoData: `<h5>【五世】</h5> <ul>
    <li>生於1933年11月7日</li> <li>卒於2024年2月20日 </li></ul>` , SPinfo: 1, SPinfoData: `<ul><li>生於1938年5月6日</li><li>卒於吉日</li></ul>`
    };
    window.five4_5 = window.five4_5 || {};
    window.five4_5.data = { name: "郭月雲", info: 1, spouse: 0, children: 0, infoData: `<h5>【五世】</h5><ul><li>生於1936年3月5日</li></ul>` };
    window.five4_6 = window.five4_6 || {};
    window.five4_6.data = { name: "郭月仙", info: 1, spouse: 0, children: 0, infoData: `<h5>【五世】</h5><ul><li>生於1937年2月6日</li></ul>` };
    window.five4_7 = window.five4_7 || {};
    window.five4_7.data = { name: "郭振良", info: 1, spouse: "郭林仙花", children: [six7_3.data, six7_2.data, six7_1.data], infoData: `<h5>【五世】</h5><ul><li>生於1938年10月24日</li></ul>`, SPinfo: 1, SPinfoData: `<ul><li>生於1938年11月10日</li></ul>` };
    window.five4_8 = window.five4_8 || {};
    window.five4_8.data = { name: "郭振吉", info: 1, spouse: "郭江昭蓉", children: [six8_4.data, six8_3.data, six8_2.data, six8_1.data], infoData: `<h5>【五世】</h5><ul><li>生於1941年12月25日</li></ul>`, SPinfo: 1, SPinfoData: `<ul><li>生於1942年9月19日</li></ul>` };
    window.five4_9 = window.five4_9 || {};
    window.five4_9.data = { name: "郭振壽", info: 1, spouse: "郭陳麗玉", children: [six9_4.data, six9_3.data, six9_2.data, six9_1.data], infoData: `<h5>【五世】</h5><ul><li>生於1945年2月12日</li></ul>`, SPinfo: 1, SPinfoData: `<ul><li>生於1968年3月10日</li></ul>` };
    window.five4_10 = window.five4_10 || {};
    window.five4_10.data = { name: "郭月燕", info: 1, spouse: 0, children: 0, infoData: `<h5>【五世】</h5><ul><li>生於1947年3月25日</li></ul>` };

    //四世
    window.four1_1 = window.four1_1 || {};
    window.four1_1.data = {
        name: "郭添麟", info: 1, infoData:
            `  
    <ul>
        <li><h5>【四世】</h5>為仁公 字 瑞書</li>
        <li>德聲公第一子</li>
        <li>全省郭姓會長</li>
        <li>生於一八八八年戊子年八月二十日寅時
        <br>卒於一九二七年丁卯年十一月廿一日戌時</li>
    </ul>                  
    `, spouse: '張氏便治', children: [five1_5.data, five1_4.data, five1_3.data, five1_2.data, five1_1.data]
    };
    window.four1_2w = window.four1_2w || {};
    window.four1_2w.data = { name: "郭招治", info: 1, infoData: '郭寶玉長女，生於明治29年12月22日', spouse: 0, children: 0 };
    window.four1_2 = window.four1_2 || {};
    window.four1_2.data = {
        name: "郭添忠", info: 1, infoData:
            `  
            <ul>
            <li><h5>【四世】</h5>為忠公</li>
            <li>德聲公第二子</li>
            <li>生於一八九九年己亥年三月廿三日
            <br>卒於一九二一年辛酉年十月十三日</li>
          
            </ul>                  
        `, spouse: '許氏', children: [{ name: "郭振亨", info: 0, spouse: 0, children: [sixAdd5_2.data, sixAdd5_1.data] }]
    };
    window.four1_3 = window.four1_3 || {};
    window.four1_3.data = {
        name: "郭添信", info: 1, spouse: "郭張春", children: [five4_10.data, five4_9.data, five4_8.data, five4_7.data, five4_6.data, five4_5.data, five4_4.data, five4_3.data, five4_2.data, five4_1.data, five4_0.data], infoData:
            `     <h5><img width="70px" src="./img/郭添信.png" alt="郭添信" class="img-fluid">【四世】為信公</h5>
            <ul>
                <li>郭寶玉第三子。</li>
                <li>生於1903年(民國前9年)2月1日
                <br>卒於1960年(民國49年)7月9日(農曆六月十六日)
                </li>
                <li>元配林氏。 再娶郭張春</li>
                <li>玉記行</h6></li>
            </ul>                  
            <br>
            <div>名片</div>
            <div><img src="./img/郭玉記名片1930_01_03.jpg" alt="" class="img-fluid"></div>
            `,
        SPinfo: 1, SPinfoData: `<img width="70px" src="./img/郭張春.png" alt="郭張春" class="img-fluid">
        <br>生於1906年(民國前6年)12月5日<br>卒於?年正月二十七日 
        `,
    };
    window.four1_4 = window.four1_4 || {};
    window.four1_4.data = {
        name: "郭添智", info: 1, spouse: '石氏', SPinfo: 0, infoData:
            `<h5>【四世】</h5>為智公`,
        children: [
            {
                name: "郭振貞", info: 1, spouse: 0, children: 0,
                infoData: `
                生於昭和8年11月15日<br>
            聯絡電話:(住)2564509/(店)2568401
            `,
            },
            { name: "郭振楠", info: 0, spouse: 0, children: 0 },

        ]
    };

    window.four2_1 = window.four2_1 || {};
    window.four2_1.data = { name: "為通", info: 0, spouse: 0, children: 0 };
    window.four2_2 = window.four2_2 || {};
    window.four2_2.data = { name: "為川", info: 0, spouse: 0, children: 0 };
    window.four2_3 = window.four2_3 || {};
    window.four2_3.data = { name: "為炮", info: 0, spouse: 0, children: 0 };
    window.four2_4 = window.four2_4 || {};
    window.four2_4.data = { name: "為灼", info: 0, spouse: 0, children: 0 };
    window.four2_5 = window.four2_5 || {};
    window.four2_5.data = { name: "為炫", info: 0, spouse: 0, children: 0 };

    window.four3_5 = window.four3_5 || {};
    window.four3_5.data = { name: "為生", info: 0, spouse: 0, children: 0 };



    //三世
    window.three0_1 = window.three0_1 || {};
    window.three0_1.data = {
        name: "德寬", info: 1, infoData: " <h5>【三世】</h5>", spouse: 0, children: [
            { name: "為柱", info: 0, infoData: 0, spouse: 0, children: 0, }
        ]
    };
    window.three1_1 = window.three1_1 || {};
    window.three1_1.data = {
        name: "郭寶玉", info: 1, spouse: "汪氏美", children: [four1_4.data, four1_3.data, four1_2.data, four1_2w.data, four1_1.data], infoData:
            `     <h5>【三世】德聲公</h5>
            <ul>
                <li>郭金典長子。</li>
                <li>生於應慶3年11月15日<br>
                <li>卒於明治43年(1910年)7月25日(農曆六月十九日)<br>
                </li>
                <li>經營油車以製造食用植物性油類，頗具規模與聲譽。</li>
            </ul>                     
            ` , SPinfo: 1, SPinfoData: `
            <ul>
            <li>生於明治年3年11月124日</li>
            <li>明治19年4月10日婚姻入戶</li>
            </ul> 
            `
    };
    window.three2_1 = window.three2_1 || {};
    window.three2_1.data = { name: "德塗", info: 1, infoData: " <h5>【三世】</h5>", spouse: 0, children: [four2_4.data, four2_3.data, four2_2.data, four2_1.data] };
    window.three3_1 = window.three3_1 || {};
    window.three3_1.data = { name: "德石", info: 1, infoData: " <h5>【三世】</h5>", spouse: 0, children: [four3_5.data] };

    //二世
    window.two1 = window.two1 || {};
    window.two1.data = { name: "郭金虔", info: 1, spouse: 0, children: 0, infoData: " <h5>【二世】</h5>尚誠公" };
    window.two2 = window.two2 || {};
    window.two2.data = { name: "郭金聲", info: 1, spouse: 0, children: [three0_1.data], infoData: " <h5>【二世】</h5>尚振公" };
    window.two3 = window.two3 || {};
    window.two3.data = {
        name: "郭金典", info: 1, spouse: "陳氏", children: [three3_1.data, three2_1.data, three1_1.data], infoData:
            `     <h5>【二世】尚賢公，稱老祖公</h5>
                    <ul>
                        <li>郭惟琶第三子。</li>
                        <li>卒於1899年(明治32年)</li>
                        <li>於今永福國小附近設錢莊。</li>
                        <li>辦金銀兌換等業務。 </li>
                        <li>好像有兩個妾(陳瓊花、陳雙喜)</li>
                    </ul>                     
                    `, SPinfo: 0,
    };


    //不可考(成器公的兒子)
    window.c_add1 = window.c_add1 || {};
    window.c_add1.data = { name: "(不詳)", info: 0, spouse: 0, children: 0 };
    window.c_add2 = window.c_add2 || {};
    window.c_add2.data = { name: "(不詳)", info: 0, spouse: 0, children: 0 };
    window.c_add3 = window.c_add3 || {};
    window.c_add3.data = {
        name: "(不詳)", info: 0, spouse: 0,
        //一世(成器公的孫子)
        children: [
            {
                name: "郭惟琶", info: 1, infoData: ` 
                <h5>渡臺始祖溫釀公【一世】</h5>
                <ul>
                    <li>福建省 泉州府 晉江縣 南門外十九都 前坑鄉。</li>
                    <li>成器公之孫，其父是成器公第幾子已不可考。</li>
                    <li>生於1802年(清嘉慶七年)</li>
                    <li>卒於1859年(清嘉慶七年)十二月廿五日</li>
                    <li>約在1830年左右遷移至臺。於台南定居，慘淡墾營。</li>
                </ul> `  , spouse: "施氏", children: [two3.data, two2.data, two1.data]
            },

        ]
    }
    window.c_add4 = window.c_add4 || {};
    window.c_add4.data = {
        name: "郭天侯", info: 1, spouse: 0, infoData: `<h5>【四房祖】</h5>成器公第四子`, children: [
            {
                name: "郭惟枝", info: 1, infoData: `<h5>【四房祖】</h5>`, spouse: "吳氏", children: [
                    {
                        name: "郭瑾(適李)", info: 0, spouse: 0, children: 0
                    },

                ]
            },

        ]
    };


    var app = new Vue({
        el: '#family',
        data: {
            零世: [
                {
                    name: "成器公", info: 1, spouse: 0, infoData: "福建省人", children: [c_add4.data, c_add3.data, c_add2.data, c_add1.data],
                }
            ],//零世 結束 




        },//data結束 



    });





});

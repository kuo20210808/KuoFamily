$(function () {

    //每一個人(除了身分是配偶的)都各自有一個{資料} 避免有後代的話還要傳{}進去造成回呼地域
    //children:[小,大]

    //七世
    window.seven1_1 = window.seven1_1 || {};
    window.seven1_1.data = { name: "郭鎮源", info: 0, spouse: 0, children: 0 };
    window.seven1_2 = window.seven1_2 || {};
    window.seven1_2.data = { name: "郭雅云", info: 0, spouse: 0, children: 0 };
    window.seven3_1 = window.seven3_1 || {};
    window.seven3_1.data = { name: "郭宇衡", info: 0, spouse: 0, children: 0 };
    window.seven4_1 = window.seven4_1 || {};
    window.seven4_1.data = { name: "郭敏郎", info: 0, spouse: 0, children: 0 };
    window.seven4_2 = window.seven4_2 || {};
    window.seven4_2.data = { name: "郭啟仁", info: 0, spouse: 0, children: 0 };
    window.seven7_1 = window.seven7_1 || {};
    window.seven7_1.data = { name: "郭家瑜", info: 0, spouse: 0, children: 0 };
    window.seven7_2 = window.seven7_2 || {};
    window.seven7_2.data = { name: "郭泳青", info: 0, spouse: 0, children: 0 };
    window.seven8_1 = window.seven8_1 || {};
    window.seven8_1.data = { name: "郭培弘", info: 0, spouse: 0, children: 0 };
    window.seven8_2 = window.seven8_2 || {};
    window.seven8_2.data = { name: "郭培德", info: 0, spouse: 0, children: 0 };
    window.seven9_1 = window.seven9_1 || {};
    window.seven9_1.data = { name: "郭少恩", info: 0, spouse: 0, children: 0 };
    window.seven9_2 = window.seven9_2 || {};
    window.seven9_2.data = { name: "郭雪恩", info: 0, spouse: 0, children: 0 };
    window.seven9_3 = window.seven9_3 || {};
    window.seven9_3.data = { name: "郭愛恩", info: 0, spouse: 0, children: 0 };
    //六世
    window.six1_1 = window.six1_1 || {};
    window.six1_1.data = { name: "郭育均", info: 0, spouse: 0, children: 0 };
    window.six1_2 = window.six1_2 || {};
    window.six1_2.data = { name: "郭承棟", info: 0, spouse: "吳秀英", children: [seven1_2.data, seven1_1.data] };
    window.six3_1 = window.six3_1 || {};
    window.six3_1.data = { name: "郭懿嬋", info: 0, spouse: 0, children: 0 };
    window.six3_2 = window.six3_2 || {};
    window.six3_2.data = { name: "郭素華", info: 0, spouse: 0, children: 0 };
    window.six3_3 = window.six3_3 || {};
    window.six3_3.data = { name: "郭承昌", info: 0, spouse: "楊文琦", children: [seven3_1.data] };
    window.six4_1 = window.six4_1 || {};
    window.six4_1.data = { name: "郭承榮", info: 0, spouse: "蔡淳淳", children: [seven4_2.data, seven4_1.data] };
    window.six4_2 = window.six4_2 || {};
    window.six4_2.data = { name: "郭雯蘭", info: 0, spouse: 0, children: 0 };
    window.six4_3 = window.six4_3 || {};
    window.six4_3.data = { name: "郭凱寧", info: 0, spouse: 0, children: 0 };
    window.six4_4 = window.six4_4 || {};
    window.six4_4.data = { name: "郭錦慧", info: 0, spouse: 0, children: 0 };
    window.six4_5 = window.six4_5 || {};
    window.six4_5.data = { name: "郭瑞華", info: 0, spouse: 0, children: 0 };
    window.six4_6 = window.six4_6 || {};
    window.six4_6.data = { name: "郭錦玲", info: 0, spouse: 0, children: 0 };
    window.six7_1 = window.six7_1 || {};
    window.six7_1.data = { name: "郭政岡", info: 0, spouse: "林玉禎", children: [seven7_2.data, seven7_1.data] };
    window.six7_2 = window.six7_2 || {};
    window.six7_2.data = { name: "郭佩儀", info: 0, spouse: 0, children: 0 };
    window.six7_3 = window.six7_3 || {};
    window.six7_3.data = { name: "郭純霓", info: 0, spouse: 0, children: 0 };
    window.six8_1 = window.six8_1 || {};
    window.six8_1.data = { name: "郭承祥", info: 0, spouse: "王惠禎", children: [seven8_2.data, seven8_1.data] };
    window.six8_2 = window.six8_2 || {};
    window.six8_2.data = { name: "郭靜恩", info: 0, spouse: 0, children: 0 };
    window.six8_3 = window.six8_3 || {};
    window.six8_3.data = { name: "郭靜芳", info: 0, spouse: 0, children: 0 };
    window.six8_4 = window.six8_4 || {};
    window.six8_4.data = { name: "郭靜玲", info: 0, spouse: 0, children: 0 };
    window.six9_1 = window.six9_1 || {};
    window.six9_1.data = { name: "郭靜津", info: 0, spouse: 0, children: 0 };
    window.six9_2 = window.six9_2 || {};
    window.six9_2.data = { name: "郭靜黛", info: 0, spouse: 0, children: 0 };
    window.six9_3 = window.six9_3 || {};
    window.six9_3.data = { name: "郭靜蓉", info: 0, spouse: 0, children: 0 };
    window.six9_4 = window.six9_4 || {};
    window.six9_4.data = { name: "郭承峰", info: 0, spouse: "楊麟鈞", children: [seven9_3.data, seven9_2.data, seven9_1.data] };

    //五世
    window.five4_1 = window.five4_1 || {};
    window.five4_1.data = { name: "郭振益", info: 1, spouse: "郭王錦梅", children: [six1_2.data, six1_1.data], infoData: `<h6>台南 玉記</h6>` };
    window.five4_2 = window.five4_2 || {};
    window.five4_2.data = { name: "郭月裡", info: 0, spouse: 0, children: 0 };
    window.five4_3 = window.five4_3 || {};
    window.five4_3.data = { name: "郭振木", info: 0, spouse: "郭鄭月昭", children: [six3_3.data, six3_2.data, six3_1.data] };
    window.five4_4 = window.five4_4 || {};
    window.five4_4.data = { name: "郭振福", info: 0, spouse: "郭胡明玉", children: [six4_6.data, six4_5.data, six4_4.data, six4_3.data, six4_2.data, six4_1.data] };
    window.five4_5 = window.five4_5 || {};
    window.five4_5.data = { name: "郭月雲", info: 0, spouse: 0, children: 0 };
    window.five4_6 = window.five4_6 || {};
    window.five4_6.data = { name: "郭月仙", info: 0, spouse: 0, children: 0 };
    window.five4_7 = window.five4_7 || {};
    window.five4_7.data = { name: "郭振良", info: 0, spouse: "郭林仙花", children: [six7_3.data, six7_2.data, six7_1.data] };
    window.five4_8 = window.five4_8 || {};
    window.five4_8.data = { name: "郭振吉", info: 0, spouse: "郭江昭蓉", children: [six8_4.data, six8_3.data, six8_2.data, six8_1.data] };
    window.five4_9 = window.five4_9 || {};
    window.five4_9.data = { name: "郭振壽", info: 0, spouse: "郭陳麗玉", children: [six9_4.data, six9_3.data, six9_2.data, six9_1.data] };
    window.five4_10 = window.five4_10 || {};
    window.five4_10.data = { name: "郭月燕", info: 0, spouse: 0, children: 0 };

    //四世
    window.four1_1 = window.four1_1 || {};
    window.four1_1.data = { name: "為仁", info: 0, spouse: 0, children: 0 };
    window.four1_2 = window.four1_2 || {};
    window.four1_2.data = { name: "為忠", info: 0, spouse: 0, children: 0 };
    window.four1_3 = window.four1_3 || {};
    window.four1_3.data = { name: "為信", info: 0, spouse: 0, children: [five4_10.data, five4_9.data, five4_8.data, five4_7.data, five4_6.data, five4_5.data, five4_4.data, five4_3.data, five4_2.data, five4_1.data,] };
    window.four1_4 = window.four1_4 || {};
    window.four1_4.data = { name: "為智", info: 0, spouse: 0, children: 0 };

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
    window.three1_1 = window.three1_1 || {};
    window.three1_1.data = {
        name: "郭寶玉", info: 1, spouse: 0, children: [four1_4.data, four1_3.data, four1_2.data, four1_1.data], infoData:
            `     <h5>三世 德聲公</h5>
            <ul>
                <li>郭金典長子。</li>
                <li> 經營油車以製造食用植物性油類，頗具規模與聲譽。</li>
            </ul>                     
            ` };
    window.three2_1 = window.three2_1 || {};
    window.three2_1.data = { name: "德塗", info: 0, spouse: 0, children: [four2_4.data, four2_3.data, four2_2.data, four2_1.data] };
    window.three3_1 = window.three3_1 || {};
    window.three3_1.data = { name: "德石", info: 0, spouse: 0, children: [four3_5.data] };

    //二世
    window.two1 = window.two1 || {};
    window.two1.data = { name: "尚誠", info: 0, spouse: 0, children: 0 };
    window.two2 = window.two2 || {};
    window.two2.data = { name: "尚振", info: 0, spouse: 0, children: 0 };
    window.two3 = window.two3 || {};
    window.two3.data = {
        name: "郭金典", info: 1, spouse: "呆呆", children: [three3_1.data, three2_1.data, three1_1.data], infoData:
            `     <h5>二世 尚賢公</h5>
                    <ul>
                        <li>郭惟琶第三子。</li>
                        <li>於今永福國小附近設錢莊。</li>
                        <li> 辦金銀兌換等業務。 </li>
                    </ul>                     
                    `};











    var app = new Vue({
        el: '#family',
        data: {
            零世: [
                {
                    name: "成器公", info: 1, spouse: 0, infoData: "福建省人", infoImg: 0,
                    //一世
                    children: [
                        {
                            name: "郭惟琶", info: 1, infoData: ` 
                    <h5>渡臺始祖溫釀公</h5>
                    <ul>
                        <li>福建省 泉州府 晉江縣 南門外十九都 前坑鄉，係成器公之 孫。</li>
                        <li>生於公元一八 O 二年(清嘉慶七年)</li>
                        <li>約在一百五十年前遷移至臺。於台南定居，慘淡墾營。</li>
                    </ul> `  , spouse: 0, children: [two3.data, two2.data, two1.data]
                        },

                    ]
                }
            ],//零世 結束 
        },//data結束 



    });





});

/*/////////////////////////////////////////////////
Dx2 Devil Fusion Emulator
Author: Robin Chiu
E-mail: oceanxdds@gmail.com
Github: https://github.com/oceanxdds/dx2_fusion
Publish: https://oceanxdds.github.io/dx2_fusion/
//////////////////////////////////////////////////*/

// Digital Devil Data (Stable Version)

const ddd_stable = [
    {
        name:'大天使',
        name_tw:'大天使',
        name_en:'Herald',
        formulas:[
            ['神獸','女神'],
            ['神獸','魔神'],
            ['聖獸','女神'],
            ['龍神','女神'],
            ['天使','女神'],
            ['天使','聖獸'],
            ['墮天使','聖獸']
        ],
        devils:[
            {   
                name:'メタトロン',      name_tw:'梅塔特隆', name_en:'Metatron',   rarity:5,   grade:99,  icon:'daitensi_metatoron.png',  skills:['天罰','無限のチャクラ','シナイの神火'], skill4:['不屈の闘志','マハンマダイン','討滅の咆哮','二分の魔脈','電撃反射'], skill5:['','吸魔','マハラギダイン','マハジオダイン','物理耐性'], elements:['','rs','rs','rs','rs','nu',''], type:'attack'     },
            {   name:'ミカエル',        name_tw:'米迦勒', name_en:'Michael',      rarity:5,    grade:90, icon:'daitensi_mikaeru.png', skills:["勝利の息吹","魂の審判","メギドラオン"], skill4:["食いしばり","裁きの雷火","メディアラハン","奈落のマスク","呪殺反射"], skill5:['','ティタノマキア','三段の賢魔','ジオダイン','緊縛無効'], elements:['','','nu','nu','','rp','wk'], type:'attack'     },
            {   name:'マンセマット',        name_tw:'莫塞瑪特', name_en:'Mastema',     rarity:5,    grade:83, icon:'daitensi_mansemato.png', skills:["審判の光","バインドボイス","憎悪の試練"], skill4:["二分の魔脈","アイスエイジ","マカジャマオン","破魔ハイブースタ","氷結反射"], skill5:['','殺風激','乱れ狂い','ハマダイン','電撃耐性'], elements:['','wk','nu','','rp','rp',''], type:'attack'     },
            {   name:'アズラエル',      name_tw:'阿斯萊爾',    name_en:'Azrael', rarity:4,    grade:67, icon:'daitensi_azuraeru.png', skills:["テトラカーン","イービルアイ","アギダイン"], skill4:["マカラカーン","ムドダイン","先見の啓示","マカラカシフト","呪殺無効"], skill5:['',"甘噛み","デクンダ","野獣の勘","審判の光"], elements:['rs','rs','wk','','','rp','rs'], type:'support'            },
            {   name:'サンダルフォン',   name_tw:'聖達芬',     name_en:'Sandalphon', rarity:4,           grade:61, icon:'daitensi_sandaruhuon.png', skills:["ハマダイン","ザンダイン","スクカオート"], skill4:["アムリタ","マハンマオン","サマリカーム","野獣の勘","衝撃耐性"],skill5:['',"メポズムディ","反撃","ラクンダ","メガトンプレス"], elements:['rs','','','rs','','rp','nu'], type:'attack'         },
            {   name:'ライラ',          name_tw:'萊拉',    name_en:'Lailah', rarity:3,           grade:43, icon:'daitensi_raira.png', skills:["メディラ","破魔ブースタ","マハンマオン"], skill4:["マカジャマオン","ハマダイン","リカーム","勝利の息吹","電撃耐性"],skill5:['',"ザン","マハザン","ヒートウェイブ","ブフ"], elements:['','','','wk','rs','nu','wk'], type:'attack'          }
        ]
    },
    {
        name:'女神',
        name_tw:'女神',
        name_en:'Megami',
        highlight:false,
        formulas:[
            ['靈鳥','大天使'],
            ['魔神','靈鳥'],
            ['聖獸','大天使'],
            ['聖獸','神獸'],
            ['幻魔','靈鳥'],
            ['龍神','天使'],
            ['地母神','魔神'],
            ['地母神','幻魔'],
            ['天使','大天使'],
            ['墮天使','天使'],
            ['鬼女','大天使'],
            ['鬼女','神獸'],
            ['鬼女','地母神'],
            ['鬼女','妖精']
        ],
        devils:[
            {   name:'イザナミ',         name_tw:'伊邪那美', name_en:'Izanami',       rarity:5,                grade:89, icon:'megami_izanami.png', skills:["ショックウェーブ","無慈悲な一撃","黄泉津大神"], skill4:["三分の活泉","ヘルズアイ","コンセントレイト","電撃ハイブースタ","氷結反射"], skill5:['',"ラクンダオート","静寂の祈り","マハジオダイン","リカームドラ"], elements:['','wk','nu','','','rs','rp'], type:'support'            },
            {   name:'ラクシュミ',         name_tw:'吉祥天', name_en:'Lakshmi',       rarity:5,                grade:85, icon:'megami_rakusyumi.png', skills:["ディアラハン","ツイスター","蓮華の舞"], skill4:["二分の魔脈","殺風激","護国の咆哮","狂い咲き","衝撃無効"], skill5:['',"ジオダイン","ラクンダオート","虚弱無効","イービルアイ"], elements:['','','','','wk','rs','nu'], type:'support'            },
            {   name:'イシュタル',        name_tw:'伊絲塔', name_en:'Ishtar',       rarity:5,                grade:82, icon:'megami_isyutaru.png', skills:["マハンマオン","ディアラハン","ジャッジメント"], skill4:["サマリカーム","裁きの雷火","コンセントレイト","テトラカシフト","衝撃無効"], skill5:['','アイスエイジ','マハマリカリオン','毒床無効','呪殺耐性'],elements:['','','','nu','wk','nu','wk'], type:'heal'            },
            {   name:'サラスヴァティ',    name_tw:'妙音天女', name_en:'Sarasvati',           rarity:4,                grade:69, icon:'megami_sarasuvatei.png', skills:["マハブフーラ","バリア","静寂の祈り"], skill4:["ブフダイン","絶対零度","メディラマ","追い打ち","氷結反射"],skill5:['',"メチャームディ","呪い耐性","ミナゴロシの愉悦","イービルアイ"], elements:['','wk','nu','','','','wk'], type:'support'            },
            {   name:'パラスアテナ',      name_tw:'帕拉斯雅典娜', name_en:'Pallas Athena',         rarity:4,                grade:62, icon:'megami_parasuatena.png', skills:["衝撃耐性","刹那五月雨撃ち","天罰"], skill4:["マカラカーン","モータルジハード","ディアラハン","勝利のチャクラ","火炎無効"],skill5:['',"五月雨斬り","静寂の祈り","毒針","ツイスター"], elements:['rs','','','','','nu','wk'], type:'attack'            },
            {   name:'スカアハ',          name_tw:'斯卡哈', name_en:'Scathach',     rarity:3,                grade:50, icon:'megami_sukaaha.png', skills:["ザンマ","冥界破","ウィンドブレス"], skill4:["二分の活泉","狂乱の剛爪","ディアラマ","地獄のマスク","電撃耐性"],skill5:['',"ブフ","反撃","自然治癒","暴れまくり"], elements:['','','','wk','nu','rs',''], type:'attack'            },
            {   name:'アリアンロッド',     name_tw:'阿麗安蘿德', name_en:'Arianrhod',          rarity:3,                grade:44, icon:'megami_arianrodo.png', skills:["ハマオン","メディア","怪力乱神"], skill4:["ディアラ","刹那五月雨撃ち","リディアコワース","千発千中","氷結無効"],skill5:['',"マハジオ","チャームディ","初段の恵体","クロズディ"], elements:['rs','','','','','rs',''], type:'attack'            },
            {   name:'ハトホル',          name_tw:'哈索爾', name_en:'Hathor',     rarity:2,                grade:27, icon:'megami_htohoru.png', skills:["アムリタ","ザン","ジオンガ"], skill4:["メポズムディ","マハジオ","メチャームディ","一分の魔脈","衝撃無効"], skill5:['',"ディア","初段の猛速","チャームディ","メウィークディ"],elements:['wk','','rs','','rs','rs',''], type:'heal'            }
        ]
    },
    {
        name:'靈鳥',
        name_tw:'靈鳥',
        name_en:'Avian',
        formulas:[
            ['神獸','大天使'],
            ['天使','神獸'],
            ['妖魔','女神'],
            ['魔獸','神獸'],
            ['妖精','龍王'],
            ['妖精','魔獸'],
            ['鬼女','聖獸'],
            ['夜魔','妖鬼'],
            ['妖獸','妖魔'],
            ['妖獸','龍王'],
            ['魔王','妖魔'],
            ['邪鬼','聖獸']
        ],
        devils:[
            {  name:'ガルーダ',         name_tw:'迦樓羅', name_en:'Garuda',      rarity:5,                grade:80, icon:'reityou_garuda.png', skills:["ザンダイン","ラクンダオート","ヴァーハナ"], skill4:["三段の賢魔","マハラギダイン","フォッグブレス","狂戦士","破魔無効"], skill5:['',"トリスアギオン","メギドラ","寸分の見切り","氷結耐性"], elements:['','rp','wk','','nu','rs',''], type:'attack'            },
            {  name:'ヤタガラス',         name_tw:'八咫烏', name_en:'Yatagarasu',      rarity:4,                grade:66, icon:'reityou_yatagarasu.png', skills:["冥界破","スクンダオート","スピードスター"], skill4:["物理ブースタ","モータルジハード","スクカジャ","寸分の見切り","物理耐性"], skill5:['',"マハラギオン","一分の魔脈","ウィンドブレス","緊縛耐性"], elements:['','nu','wk','','','rs',''], type:'support'            },
            {　name:'スザク',         name_tw:'朱雀', name_en:'Feng Huang',      rarity:3,                grade:53, icon:'reityou_suzaku.png', skills:["アギラオ","タルンダオート","メディラマ"], skill4:["ダークゾーン無効","マハンマ","バインドボイス","毒床渡り","物理耐性"], skill5:['','コロシの愉悦','クロズディ','メパララディ','ジオ'], elements:['wk','nu','wk','','','',''], type:'heal'            },
            {  name:'ジャターユ',         name_tw:'佳塔由', name_en:'Jatayu',      rarity:3,                grade:44, icon:'reityou_jatayu.png', skills:["スクカジャ","スクカオート","デカジャ"], skill4:["スクンダ","デスバウンド","リカーム","野獣の勘","電撃耐性"],skill5:['',"マハザン","乱れ狂い","メポズムディ","カースディ"], elements:['','rs','','wk','rp','nu','wk'], type:'support'            },
            {  name:'スパルナ',         name_tw:'金翅鳥', name_en:'Sparna',      rarity:2,                grade:28, icon:'reityou_suparuna.png', skills:["ジオ","金剛発破","ラクカジャ"], skill4:["ディアラ","吸魔","タルンダ","地獄のマスク","電撃無効"],skill5:['',"クロズディ","百発百中","ムド","突撃"], elements:['','','','rs','','rs','wk'], type:'attack'            },
            {  name:'ハンサ',         name_tw:'漢薩', name_en:'Hamsa',      rarity:2,                grade:24, icon:'reityou_hansa.png', skills:["ハマ","ジオンガ","スクカジャ"], skill4:["マカジャマ","マハンマ","メディア","スピードスター","氷結耐性"],skill5:['',"ディア","ジオ","ポズムディ","なぎ払い"], elements:['','','','rs','','','wk'], type:'support'            }
        ]
    },
    {
        name:'魔神',
        name_tw:'魔神',
        name_en:'Deity',
        formulas:[
            ['女神','大天使'],
            ['靈鳥','女神'],
            ['破壞神','女神'],
            ['邪鬼','破壞神'],
            ['地母神','大天使'],
            ['魔獸','大天使'],
            ['墮天使','魔獸'],
            ['妖鬼','鬼神'],
            ['夜魔','墮天使'],
            ['邪神','神獸'],
            ['邪神','魔獸']
        ],
        devils:[
            {                name:'ヴィシュヌ',      name_tw:'毘濕奴', name_en:'Vishnu',         rarity:5,                grade:97, icon:'majin_visyunu.png', skills:["ブフダイン","天罰","アヴァターラ"], skill4:["ムドダイン","メギドラオン","勇奮の鼓舞","魔封無効","呪殺反射"], skill5:['','地獄の業火','緊縛無効','ウィンドブレス','火炎耐性'],elements:['','wk','rp','','','nu','nu'], type:'attack'            },
            {                name:'アマテラス',      name_tw:'天照', name_en:'Amaterasu',         rarity:5,                grade:82, icon:'majin_amaterasu.png', skills:["マハラギオン","タルンダ","天孫降臨"], skill4:["スクカオート","トリスアギオン","メディアラハン","三段の賢魔","電撃無効"], skill5:['','三段の強運','魅了無効','マハンマダイン','マハマカジャオン'],elements:['','rp','','wk','','rs',''], type:'support'            },
            {                name:'オーディン',      name_tw:'奧丁', name_en:'Odin',         rarity:4,                grade:73, icon:'majin_odein.png', skills:["氷結耐性","ショックウェーブ","グングニル"], skill4:["無慈悲な一撃","メガトンレイド","タルカジャ","千発千中","呪殺無効"], skill5:['',"イービルアイ","マハラギ","ブフーラ","ポズムディ"],elements:['','','','rp','wk','rs','rs'], type:'attack'            },
            {                name:'プロメテウス',    name_tw:'普羅米修斯', name_en:'Prometheus',           rarity:4,                grade:67, icon:'majin_purometeusu.png', skills:["火炎ブースタ","マカラカシフト","アギダイン"], skill4:["三段の恵体","マハラギダイン","リカームドラ","無限のチャクラ","火炎吸収"], skill5:['',"電撃耐性","マハザンマ","乱れ狂い","毒耐性"],elements:['','nu','wk','','','rs',''], type:'attack'            },
            {                name:'ミトラ',         name_tw:'密特拉', name_en:'Mitra',      rarity:3,                grade:55, icon:'majin_mitora.png', skills:["マハジュ","バリアコワース","イービルアイ"], skill4:["メギド","マハンマオン","フォッグブレス","狂い咲き","衝撃耐性"], skill5:['',"メディア","ディア","マハジオ","初段の恵体"],elements:['rp','','wk','','','rs','rs'], type:'support'            },
            {                name:'ホルス',         name_tw:'荷魯斯', name_en:'Horus',      rarity:3,                grade:49, icon:'majin_horusu.png', skills:["ディアラマ","デクンダ","マハンマ"], skill4:["二分の魔脈","ハマダイン","アムリタ","破魔ブースタ","電撃無効	"], skill5:['',"カースディ","パララディ","マハラギ","カースディ"],elements:['rs','','','','','rp','wk'], type:'heal'            }
        ]
    },
    {
        name:'神獸',
        name_tw:'神獸',
        name_en:'Avatar',
        formulas:[
            ['聖獸','魔神'],
            ['龍神','靈鳥'],
            ['地母神','聖獸'],
            ['龍王','幻魔'],
            ['魔獸','魔神'],
            ['魔獸','聖獸'],
            ['魔獸','破壞神'],
            ['夜魔','妖魔'],
            ['邪神','魔神'],
            ['妖獸','靈鳥'],
            ['妖獸','邪神'],
            ['外道','聖獸']
        ],
        devils:[
            {                name:'バロン',         name_tw:'巴隆', name_en:'Barong',      rarity:5,                grade:84, icon:'sinjyuu_baron.png', skills:["マハジオンガ","ショックウェーブ","バロンダンス"], skill4:["食いしばり","真理の雷","リカームドラ","電撃ハイブースタ","呪殺無効"], skill5:['',"ブフダイン","マハシバブー","三段の恵体","衝撃耐性"],elements:['rs','','','nu','wk','nu','wk'],type:'support'           },
            {                name:'アヌビス',       name_tw:'阿努比斯', name_en:'Anubis',        rarity:4,                grade:70, icon:'sinjyuu_anubisu.png', skills:["呪殺ブースタ","ムドダイン","審判の光"], skill4:["デクンダ","煉獄","テトラカーン","無慈悲な一撃","呪殺無効"], skill5:['',"吸魔","ポイズマ","ディア","アギラオ"],elements:['','','','','','nu','rs'],type:'attack'            },
            {                name:'キマイラ',       name_tw:'奇美拉', name_en:'Chimera',        rarity:3,                grade:49, icon:'sinjyuu_kimaira.png', skills:["マカラコワース","ジオンガ","狂乱の剛爪"], skill4:["怪力乱神","マハジオンガ","雄叫び","猛反撃","衝撃耐性"], skill5:['',"パララディ","マハンマ","メディア","自然治癒"],elements:['','rs','','rs','wk','',''],type:'support'            },
            {                name:'マカミ',         name_tw:'真神', name_en:'Makami',      rarity:3,                grade:41, icon:'sinjyuu_makami.png', skills:["メパララディ","緊縛無効","ディアラマ"], skill4:["アムリタ","怪力乱神","サマリカーム","回復ブースタ","電撃無効"], skill5:['',"パララディ","マハザン","ディア","アギ"],elements:['','','','','','rs','wk'],type:'heal'            },
            {                name:'シーサー',       name_tw:'獅爺', name_en:'Shiisaa',        rarity:2,                grade:33, icon:'sinjyuu_sisa.png' , skills:["シバブー","ザン","ウィンドブレス"], skill4:["バインドクロー","マハザン","バリアコワース","緊縛追撃","氷結耐性"], skill5:['',"ブフ","アギ","百発百中","ジオ"],elements:['','rs','','','rs','rs',''],type:'support'           }
        ]
    },
    {
        name:'聖獸',
        name_tw:'聖獸',
        name_en:'Holy',
        formulas:[
            ['神獸','靈鳥'],
            ['龍神','大天使'],
            ['龍神','幻魔'],
            ['天使','幻魔'],
            ['妖魔','破壞神'],
            ['魔獸','鬼神'],
            ['妖精','大天使'],
            ['妖精','天使'],
            ['妖精','妖魔'],
            ['邪鬼','靈鳥'],
            ['夜魔','神獸'],
            ['夜魔','幻魔'],
            ['妖獸','女神'],
            ['幽鬼','妖精']
        ],
        devils:[
            {                name:'スフィンクス',     name_tw:'斯芬克斯', name_en:'Sphinx',          rarity:4,                grade:76, icon:'seijyuu_sufuinkusu.png', skills:["バリア","テトラカシフト","マハンマオン"], skill4:["モータルジハード","ジオダイン","メディアラハン","ラクカオート","氷結無効"], skill5:['',"ジュ","メガトンプレス","氷結耐性","イービルアイ"],elements:['','nu','wk','','','rp','wk'], type:'support'            },
            {                name:'スレイプニル',     name_tw:'八腳天馬', name_en:'Sleipnir',          rarity:4,                grade:62, icon:'seijyuu_sureipuniru.png', skills:["破魔ブースタ","マハンマオン","スピードスター"], skill4:["サマリカーム","ハマダイン","ディアラハン","三段の猛速","破魔無効"], skill5:['',"ファイアブレ","暴飲暴食","ツイスター","マハシバブオン"],elements:['','wk','','','','rs',''],type:'attack'            },
            {                name:'ビャッコ',         name_tw:'白虎', name_en:'Baihu',      rarity:3,                grade:48, icon:'seijyuu_byako.png', skills:["スクンダ","ジオンガ","電撃ブースタ"], skill4:["狂乱の剛爪","マハジオンガ","コンセントレイト","威圧の構え","物理耐性"], skill5:['',"乱れ狂い","マハブフ","精神漏出","毒床歩き"],elements:['','','','nu','wk','',''],type:'attack'            },
            {                name:'アピス',           name_tw:'阿庇斯', name_en:'Apis',    rarity:3,                grade:44, icon:'seijyuu_apisu.png', skills:["タルカジャ","マハンマ","マカラカシフト"], skill4:["メディラ","捨て身の一撃","ディスコード","三分の活泉","呪殺耐性"], skill5:['',"アギ","ポイズマオン","メディア","クロズディ"],elements:['','','','','','rs','wk'],type:'support'            },
            {                name:'ユニコーン',       name_tw:'獨角獸', name_en:'Unicorn',        rarity:3,                grade:42, icon:'seijyuu_unicon.png', skills:["メチャームディ","魅了無効","マハザン"], skill4:["ブフダイン","絶対零度","メクロズディ","虐殺者","氷結耐性"], skill5:['',"アギ","初段の賢魔","カースディ","なぎ払い"],elements:['','','','wk','','nu','nu'],type:'heal'            },
            {                name:'へケト',           name_tw:'海奎特', name_en:'Heqet',    rarity:2,                grade:27, icon:'seijyuu_heketo.png', skills:["メディア","マハジオ","メポズムディ"], skill4:["ジオンガ","放電","デクンダ","二分の活泉","火炎耐性"], skill5:['',"メチャームディ","なぎ払い","見切り","百発百中"],elements:['','','','rs','wk','',''],type:'heal'            }
        ]
    },
    {
        name:'幻魔',
        name_tw:'幻魔',
        name_en:'Genma',
        formulas:[
            ['龍神','妖魔'],
            ['龍神','幽鬼'],
            ['魔神','女神'],
            ['地母神','神獸'],
            ['地母神','破壞神'],
            ['妖魔','魔神'],
            ['墮天使','妖魔'],
            ['邪神','地母神'],
            ['邪神','鬼神'],
            ['外道','神獸'],
            ['外道','墮天使'],
            ['魔王','神獸'],
            ['魔王','地母神'],
            ['邪鬼','魔神'],
            ['幽鬼','魔神']
        ],
        devils:[
            {  name:'クー・フーリン',    name_tw:'庫夫林', name_en:'Cu Chulainn',           rarity:5,                grade:81, icon:'genma_kuhurin.png', skills:["ミナゴロシの愉悦","マハザンダイン","ゲイボルグ"], skill4:["リベリオン","殺風激","リカームドラ","衝撃貫通","呪殺反射"], skill5:['',"ゴッドハンド","モータルジハード","衝撃ブースタ","破魔耐性"],elements:['rs','','','','nu','',''],type:'attack'            },
            {  name:'ツクヨミ',          name_tw:'月讀', name_en:'Tsukuyomi',     rarity:4,                grade:67, icon:'genma_tukuyomi.png', skills:["一分の魔脈","ザンマ","月の加護"], skill4:["マハザン","ムドオン","リカーム","二分の活泉","火炎吸収"], skill5:['',"スクカジャ","自然治癒","ハマオン","ジオンガ"],elements:['wk','nu','nu','rs','rs','',''], type:'support'            },
            {  name:'ハヌマーン',        name_tw:'哈奴曼', name_en:'Hanuman',       rarity:4,                grade:60, icon:'genma_hanuman.png', skills:["物理耐性","空間殺法","マハザンマ"], skill4:["狂乱の剛爪","ザンダイン","挑発","猛反撃","衝撃反射"], skill5:['',"初段の恵体","イービルアイ","審判の光","虚弱耐性"],elements:['','','','wk','nu','',''],type:'attack'            },
            {  name:'クルースニク',      name_tw:'克雷斯尼克', name_en:'Kresnik',         rarity:3,                grade:49, icon:'genma_kurusuniku.png', skills:["スクンダ","電撃無効","審判の光"], skill4:["勝利のチャクラ","五月雨斬","リベリオ","無慈悲な一撃","呪殺無効"], skill5:['',"初段の恵体","マハムド","猛反撃","百発百中"],elements:['','','','','wk','nu',''],type:'attack'            },
            {  name:'タム・リン',        name_tw:'塔姆林', name_en:'Tam Lin',       rarity:3,                grade:40, icon:'genma_tamurin.png', skills:["自然治癒","ウィンドブレス","暗夜剣"], skill4:["ハマダイン","デスバウンド","メディラ","テトラカシフト","火炎耐性"], skill5:['',"マハザン","マハラギ","突撃","スラッシュ"],elements:['','','','','','rs','wk'],type:'attack'            },
            {  name:'クラマテング',      name_tw:'鞍馬天狗', name_en:'Kurama Tengu',         rarity:2,                grade:27, icon:'genma_muramatengu.png', skills:["スクカジャ","ハマ","マハザン"], skill4:["マハンマ","ザンマ","スクンダ","毒床渡り","火炎耐性"], skill5:['',"メディア","マハブフ","パララディ","メチャームディ"],elements:['','','','wk','nu','',''], type:'attack'           }
        ]
    },
    {
        name:'破壞神',
        name_tw:'破壞神',
        name_en:'Fury',
        formulas:[
            ['龍神','神獸'],
            ['龍神','地母神'],
            ['龍神','鬼神'],
            ['地母神','女神'],
            ['地母神','靈鳥'],
            ['鬼神','大天使'],
            ['鬼神','魔神'],
            ['天使','魔神'],
            ['天使','地母神'],
            ['龍王','魔神'],
            ['墮天使','魔神'],
            ['邪神','女神'],
            ['魔王','魔神'],
            ['魔王','墮天使'],
            ['幽鬼','女神']
        ],
        devils:[
            {   name:'シヴァ',           name_tw:'濕婆', name_en:'Shiva',     rarity:5,  grade:93, icon:'hakaisin_siva.png' , skills:["虐殺者","空間殺法","プララヤ"], skill4:["魅了無効","ゴッドハンド","リベリオン","寸分の見切り","氷結吸収"], skill5:['','三段の剛力','モータルジハード','暴飲暴食','衝撃耐性'],elements:['rs','dr','wk','dr','','',''],type:'attack'           },
            {   name:'ザオウゴンゲン',    name_tw:'藏王權現', name_en:'Zaou-Gongen', rarity:5,  grade:85, icon:'hakaisin_zaougongen.png' , skills:["マハラギダイン","ゴッドハンド","金剛蔵王"], skill4:["不屈の闘志","金剛発破","リベリオン","火炎ハイブースタ","物理吸収"], skill5:['',"三段の剛力","タルカオート","地獄の業火","デスカウンター"],elements:['nu','rp','','wk','','rs','rs'],type:'attack'   },
            {   name:'スサノオ',         name_tw:'素盞嗚尊', name_en:'Susano-o',  rarity:5,  grade:82, icon:'hakaisin_susanoo.png', skills:["暗殺者","モータルジハード","天叢雲剣"], skill4:["三段の剛力","血管断ち","チャージ","無慈悲な一撃","電撃吸収"], skill5:['','緊縛追撃','三段の猛速','フォッグブレス','火炎耐性'],elements:['rs','wk','','','rp','',''],type:'attack'            },
            {   name:'ホクトセイクン',    name_tw:'北斗星君', name_en:'Beiji-Weng',  rarity:4, grade:69, icon:'hakaisin_hokutoseikun.png', skills:["氷結ブースタ","ブフダイン","絶対零度"], skill4:["リカーム","マハブフダイン","ジャッジメント","呪い無効","氷結反射"], skill5:['',"破魔耐性","マハザン","ブフ","乱れ狂い"],elements:['','wk','nu','','','rs',''],type:'attack'            },
            {   name:'セイテンタイセイ',  name_tw:'齊天大聖', name_en:'Wu Kong',  rarity:4, grade:61, icon:'hakaisin_seitentaisei.png', skills:["物理ブースタ","挑発","鬼神楽"], skill4:["チャージ","ティタノマキア","早手の舞い","三段の恵体","物理無効"], skill5:['',"裁きの雷火","ヘルズアイ","マハラギ","毒追撃"],elements:['rs','rs','','wk','rs','rs','wk'],type:'attack'            },
            {   name:'アレス',           name_tw:'阿瑞斯', name_en:'Ares',    rarity:3,  grade:44, icon:'hakaisin_aresu.png', skills:["金剛発破","反撃","地獄の業火"], skill4:["デクンダ","怪力乱神","チャージ","コロシの愉悦","物理耐性"], skill5:['',"地獄のマスク","セクシーダンス","シバブオン","暴れまくり"],elements:['','','','','','rs','wk'],type:'attack'            }
        ]
    },
    {
        name:'龍神',
        name_tw:'龍神',
        name_en:'Dragon',
        formulas:[
            ['破壞神','神獸'],
            ['破壞神','幻魔'],
            ['鬼神','神獸'],
            ['龍王','聖獸'],
            ['邪鬼','鬼神'],
            ['邪鬼','龍王'],
            ['墮天使','地母神'],
            ['墮天使','龍王'],
            ['妖鬼','地母神'],
            ['妖鬼','龍王'],
            ['妖獸','鬼神'],
            ['幽鬼','鬼神']
        ],
        devils:[
            {  name:'コウリュウ',  name_tw:'黃龍', name_en:'Huang Long',  rarity:5,  grade:88, icon:'ryuusin_kouryu.png' , skills:["二段の猛速","メギドラオン","五行思想"], skill4:["勝利の息吹","エナジードレイン","ラスタキャンディ","スピードスター","呪殺無効"], skill5:['',"三段の賢魔","虐殺者","ヘルズアイ","不屈の闘志"],elements:['','rs','rs','rs','rs','nu',''],type:'support'   },
            {  name:'ケツアルカトル',  name_tw:'羽蛇神', name_en:'Quetzalcoatl',  rarity:5,  grade:80, icon:'ryuusin_kezuarukatoru.png' , skills:["マハラギダイン","マハザンダイン","セアカトルの再臨"], skill4:["毒無効","マハンマダイン","コンセントレイト","タルンダオート","物理反射"], skill5:['',"マハブフダイン","追い打ち","魔封無効","マハムドダイン"],elements:['rs','rs','','','rs','rs','wk'],type:'attack'   },
            {  name:'グクマッツ',  name_tw:'庫庫爾坎', name_en:'Gucumatz',  rarity:4,  grade:69, icon:'ryuusin_gukumatu.png' , skills:["ヒートウェイブ","アイスブレス","タルンダオート"], skill4:["野生の勘","ウィンドブレス","フォッグブレス","テトラカシフト","火炎無効"], skill5:['',"怪力乱神","タルンダ","猛反撃","メディラ"],elements:['','wk','rs','','rs','',''],type:'support'   },
            {  name:'セイリュウ',  name_tw:'青龍', name_en:'Long',  rarity:4,  grade:63, icon:'ryuusin_seiryuu.png' , skills:["衝撃ブースタ","ザンダイン","龍の反応"], skill4:["二段の猛速","怪力乱神","コンセントレイト","勝利のチャクラ","衝撃反射"], skill5:['',"マハザンダイン","空間殺法","ジオダイン","マカラコワース"],elements:['','','rs','wk','nu','',''],type:'attack'   },
            {  name:'イルルヤンカシュ',  name_tw:'伊虛延卡', name_en:'Illuyanka',  rarity:3,  grade:47, icon:'ryuusin_iruruyankasyu.png' , skills:["アイスブレス","ザンマ","龍の反応"], skill4:["ブフダイン","マハザンマ","溶解ブレス","二段の賢魔","衝撃無効"], skill5:['',"ヒートウェイブ","見切り","ハマオン","野生の勘"],elements:['','','rs','','rs','',''],type:'attack'   },
            {  name:'マカラ',  name_tw:'摩伽羅', name_en:'Makara',  rarity:3,  grade:41, icon:'ryuusin_makara.png' , skills:["マカラコワース","マハブフ","タルンダ"], skill4:["虚弱無効","メギド","マカラカーン","三分の活泉","火炎耐性"], skill5:['',"ブフーラ","反撃","精神漏出","甘噛み"],elements:['','wk','rs','','','',''],type:'support'   },
            {  name:'パトリムパス',  name_tw:'帕托利姆帕斯', name_en:'Patrimpas',  rarity:2,  grade:35, icon:'ryuusin_patorimupasu.png' , skills:["リカーム","ディアラマ","テトラジャ"], skill4:["自然治癒","ウィンドブレス","アムリタ","食いしばり","火炎耐性"], skill5:['','','','',''],elements:['','wk','rs','','rs','','wk'],type:'heal'   }
        ]
    },
    {
        name:'地母神',
        name_tw:'地母神',
        name_en:'Lady',
        formulas:[
            ['聖獸','靈鳥'],
            ['龍神','龍王'],
            ['鬼神','女神'],
            ['鬼神','靈鳥'],
            ['鬼神','聖獸'],
            ['鬼神','破壞神'],
            ['墮天使','大天使'],
            ['妖鬼','破壞神'],
            ['鬼女','魔神'],
            ['鬼女','破壞神'],
            ['鬼女','鬼神'],
            ['魔王','鬼女'],
            ['邪鬼','大天使'],
            ['邪鬼','妖精']
        ],
        devils:[
            {   name:'アシェラト',    name_tw:'亞舍拉', name_en:'Asherah', rarity:5,        grade:83, icon:'tibosin_asyerato.png', skills:["メディラマ","母なる創造","マハラギオン"], skill4:["混沌の海","トリスアギオン","静寂の祈り","回復ハイブースタ","氷結反射"], skill5:['',"審判の光","地獄のマスク","二段の強運","緊縛追撃"],elements:['','nu','wk','','nu','','wk'], type:'heal'            },
            {   name:'スカディ',      name_tw:'絲卡蒂', name_en:'Skadi', rarity:4,        grade:67, icon:'tibosin_sukadei.png', skills:["マハマカジャマ","魔封追撃","マハムドオン"], skill4:["二段の強運","絶対零度","マカラコワース","狂い咲き","火炎耐性"], skill5:['',"放電","二段の剛力","メディラ","電撃耐性"],elements:['','wk','rp','','','',''], type:'support'             },
            {   name:'キクリヒメ',     name_tw:'菊理媛', name_en:'Kikuri-Hime',          rarity:4,                grade:60, icon:'tibosin_kikurihime.png', skills:["リディア","マハラギオン","マリンカリオン"], skill4:["二段の恵体","アギダイン","ディアラマ","テトラカシフト","呪殺耐性"],skill5:['',"火炎耐性","マハポイズマオン","捨て身の一撃","ラクカジャ"], elements:['','','','wk','nu','','wk'], type:'heal'            },
            {   name:'イシス',        name_tw:'伊西斯',  name_en:'Isis',      rarity:3,                grade:54, icon:'tibosin_isisu.png', skills:["サマリカーム","ザンダイン","マハマカジャマ"], skill4:["二分の魔脈","マハザン","メウィークディ","追い打","衝撃無効"], skill5:['',"初段の剛力","百発百中","メチャームディ","ザン"],elements:['','rs','','nu','','',''], type:'support'            },
            {   name:'クシナビヒメ',   name_tw:'奇稻田姬', name_en:'Kushinada',            rarity:3,                grade:47, icon:'tibosin_kusinabihime.png', skills:["ディアラ","回復ブースタ","マハンマ"], skill4:["メディア","ハマオン","リディア","自然治癒","破魔無効"], skill5:['',"ムド","マハラギ","メパララディ","ジオ"],elements:['','','','','','rs','wk'], type:'heal'            },
            {   name:'ペレ',          name_tw:'佩蕾', name_en:'Pele',     rarity:3,                grade:40, icon:'tibosin_pere.png', skills:["メポズムディ","アギラオ","毒無効"], skill4:["ディアラ","マハラギオン","リカーム","二段の強運","物理耐性"], skill5:['',"メウィークディ","マハザン","毒床歩き","初段の賢魔"],elements:['','rs','wk','','','',''], type:'heal'            }
        ]
    },
    {
        name:'鬼神',
        name_tw:'鬼神',
        name_en:'Kishin',
        formulas:[
            ['幻魔','神獸'],
            ['破壞神','聖獸'],
            ['破壞神','靈鳥'],
            ['龍王','靈鳥'],
            ['妖鬼','靈鳥'],
            ['妖鬼','魔神'],
            ['妖鬼','神獸'],
            ['鬼女','龍王'],
            ['夜魔','地母神'],
            ['邪神','龍王'],
            ['外道','魔神'],
            ['魔王','龍王'],
            ['邪鬼','地母神']
        ],
        devils:[
            {   name:'トール',          name_tw:'索爾', name_en:'Thor',     rarity:5,                grade:83, icon:'kisin_toru.png', skills:["メガトンレイド","チャージ","ミョルニル"], skill4:["マハジオダイン","ギガントマキア","リベリオン","電撃貫通","火炎反射"], skill5:['',"マハンマダイン","ラクカオート","電撃ブースタ","衝撃耐性"],elements:['rs','nu','','rp','wk','rs',''], type:'attack'            },
            {   name:'ショウキ',        name_tw:'鍾馗', name_en:'Zhong Kui',       rarity:4,                grade:75, icon:'kisin_syouki.png', skills:["地獄のマスク","タルカオート","鬼神楽"], skill4:["魔封無効","メガトンレイド","早手の舞い","威圧の構え","物理耐性"], skill5:['',"マハムドダイン","毒床渡り","魔封追撃","マハンマオン"],elements:['','rs','','','wk','rs',''], type:'attack'            },
            {   name:'ビシャモンテン',   name_tw:'毘沙門天', name_en:'Bishamonten',           rarity:4,                grade:70, icon:'kisin_bisyamonten.png', skills:["破魔耐性","ブフダイン","怪力乱神"], skill4:["タルカジャ","冥界破","ディスコード","追い打ち","呪殺耐性"], skill5:['',"エナジードレイン","マカジャマオン","メチャームディ","衝撃耐性"],elements:['','wk','nu','','','',''], type:'attack'            },
            {   name:'ジコクテン',       name_tw:'持國天', name_en:'Jikokuten',        rarity:4,                grade:62, icon:'kisin_jikokuten.png', skills:["マハザンマ","冥界破","制圧の構え：吸"], skill4:["ザンダイン","メガトンレイド","マハシバブオン","三分の活泉","火炎無効"], skill5:['',"バインドクロー","メディアラハン","ホワイトノイズ","吸血"],elements:['','','','wk','nu','rs',''], type:'attack'            },
            {   name:'コウモクテン',     name_tw:'廣目天', name_en:'Koumokuten',          rarity:3,                grade:50, icon:'kisin_koumokuten.png', skills:["ジオンガ","テトラコワース","冥界破"], skill4:["メガトンプレス","ジオダイン","スクカジャ","反撃","物理耐性"], skill5:['',"初段の強運","マハブフ","コロシの愉悦","ブフ"],elements:['','','','nu','wk','rs',''], type:'attack'            },
            {   name:'ゾウチョウテン',   name_tw:'增長天', name_en:'Zouchouten',            rarity:3,                grade:41, icon:'kisin_zoutyouten.png', skills:["ラクカジャ","金剛発破","アギラオ"], skill4:["チャージ","ファイアブレス","挑発","毒床無効","呪殺耐性"], skill5:['',"地獄のマスク","初段の剛力","メチャームディ","メチャームディ"],elements:['','nu','wk','','','rs',''], type:'attack'            },
            {   name:'タケミナカタ',     name_tw:'建御名方', name_en:'Take-Minakata',          rarity:2,                grade:27, icon:'kisin_takeminakata.png', skills:["反撃","ジオンガ","鬼神楽"], skill4:["電撃ブースタ","放電","メパララディ","一分の魔脈","呪殺耐性"], skill5:['',"ザン","百発百中","突撃","マハブフ"],elements:['','wk','','rs','','',''], type:'attack'            }
        ]
    },
    {
        name:'天使',
        name_tw:'天使',
        name_en:'Divine',
        formulas:[
            ['幻魔','女神'],
            ['妖魔','聖獸'],
            ['妖精','神獸'],
            ['墮天使','神獸'],
            ['墮天使','妖精'],
            ['夜魔','妖精'],
            ['夜魔','鬼女'],
            ['外道','大天使'],
            ['外道','龍王'],
            ['幽鬼','神獸'],
            ['幽鬼','聖獸']
        ],
        devils:[
            {                name:'ソロネ',         name_tw:'座天使', name_en:'Throne',      rarity:4,                grade:60, icon:'tensi_sorone.png', skills:["電撃耐性","マハラギオン","ダークゾーン無効"], skill4:["メディラ","マハンマオン","ディアラハン","寸分の見切り","氷結無効"], skill5:['',"雄叫び","氷結耐性","デスタッチ","野生の勘"],elements:['','nu','wk','','','nu','wk'], type:'attack'            },
            {                name:'ドミニオン',     name_tw:'主天使', name_en:'Dominion',          rarity:3,                grade:53, icon:'tensi_dominion.png', skills:["メカースディ","呪い無効","マハジオンガ"], skill4:["メギド","ジオダイン","常世の祈り","魔封無効","電撃無効"], skill5:['',"メチャームディ","スラッシュ","初段の恵体","ブフ"],elements:['','','','rs','wk','nu','wk'], type:'heal'            },
            {                name:'ヴァーチャー',    name_tw:'力天使', name_en:'Virtue',           rarity:3,                grade:47, icon:'tensi_vatya.png', skills:["メクロズディ","魔封無効","ハマオン"], skill4:["バリア","審判の光","コンセントレイト","スクカオート","氷結無効"], skill5:['',"マハジオ","アギ","初段の強運","初段の猛速"],elements:['','','','wk','nu','nu','wk'], type:'heal'            },
            {                name:'パワー',          name_tw:'能天使', name_en:'Power',     rarity:3,                grade:40, icon:'tensi_pawa.png', skills:["メディア","メギド","絶命剣"], skill4:["ディアラ","マハジオンガ","リベリオン","暗殺者","衝撃耐性"], skill5:['',"メパララディ","ムド","初段の賢魔","自然治癒"],elements:['','','','rs','wk','nu','wk'], type:'attack'            },
            {                name:'プリンシパリティ',   name_tw:'權天使', name_en:'Principality',            rarity:2,                grade:35, icon:'tensi_purinsiparitei.png', skills:["リカーム","ハマオン","ブフ"], skill4:["メディア","審判の光","カースディ","破魔ブースタ","呪殺耐性"], skill5:['',"初段の賢魔","メウィークディ","毒床歩き","マハザン"], elements:['','','','','','nu','wk'], type:'heal'            },
            {                name:'アークエンジェル',   name_tw:'大天使', name_en:'Archangel',            rarity:2,                grade:25, icon:'tensi_akuenjyeru.png', skills:["タルカジャ","アギ","ハマ"], skill4:["ヒートウェイブ","アギラオ","リディアコワース","百発百中","物理耐性"], skill5:['',"ザン","初段の賢魔","ブフ","百発百中"],elements:['','','','','','nu','wk'], type:'attack'            },
            {                name:'エンジェル',         name_tw:'天使', name_en:'Angel',      rarity:2,                grade:20, icon:'tensi_enjyeru.png', skills:["ハマ","マハンマ","ディアラ"], skill4:["ラクカジャ","審判の光","チャームディ","魔封無効","電撃耐性"], skill5:['',"クロズディ","アギ","メチャームディ","マハブフ"],elements:['','','','wk','','nu','wk'], type:'heal'            }
        ]
    },
    {
        name:'妖魔',
        name_tw:'妖魔',
        name_en:'Yoma',
        formulas:[
            ['幻魔','聖獸'],
            ['鬼神','幻魔'],
            ['墮天使','幻魔'],
            ['妖鬼','天使'],
            ['邪神','靈鳥'],
            ['邪神','聖獸'],
            ['妖獸','幻魔'],
            ['外道','夜魔'],
            ['外道','破壞神'],
            ['魔王','幻魔']
        ],
        devils:[
            {                name:'ガネーシャ',     name_tw:'象頭神', name_en:'Ganesha',          rarity:4,                grade:66, icon:'youma_ganesya.png', skills:["怪力乱神","富の信仰","ラクカジャ"], skill4:["捨て身の一撃","メガトンレイド","挑発","物理ブースタ","呪殺無効"], skill5:['',"メポズムディ","マハザンダイン","天罰","デゾレト"],elements:['rs','','','wk','nu','','wk'], type:'attack'            },
            {                name:'イフリート',     name_tw:'伊弗利特', name_en:'Efreet',          rarity:3,                grade:52, icon:'youma_ihurito.png', skills:["アギラオ","火炎ブースタ","マハラギ"], skill4:["アギダイン","地獄の業火","メクロズディ","追い打ち","電撃耐性"], skill5:['',"なぎ払い","ヒートウェイブ","ザン","アウトブレイク"],elements:['','rp','wk','','','',''], type:'attack'            },
            {                name:'ヴァルキリー',   name_tw:'女武神', name_en:'Valkyrie',            rarity:3,                grade:40, icon:'youma_varukiri.png' , skills:["マハンマ","絶命剣","物理ブースタ"], skill4:["ヒートウェイブ","デスバウンド","テトラコワース","三分の活泉","電撃耐性"], skill5:['',"メウィークディ","スラッシュ","クロズディ","ウィークディ"],elements:['rs','','','wk','rs','',''], type:'attack'           },
            {                name:'ディース',       name_tw:'迪絲', name_en:'Dis',        rarity:2,                grade:34, icon:'youma_deisu.png', skills:["マカジャマ","アギラオ","ザン"], skill4:["メディラ","メギド","バリアコワース","魔封追撃","衝撃耐性"], skill5:['',"チャームディ","初段の賢魔","初段の恵体","マハムド"],elements:['','','rs','rs','','','wk'], type:'heal'            },
            {                name:'アプサラス',     name_tw:'飛天女神', name_en:'Apsaras',          rarity:1,                grade:11, icon:'youma_apusarasu.png', skills:["ポズムディ","ブフ",''], skill4:["ディアラ","ブフーラ","メチャームディ","初段の猛速","電撃耐性"], skill5:['',"メポズムディ","マハブフ","野生の勘","見切り"],elements:['','wk','rs','','','',''], type:'heal'            },
            {                name:'コッパテング',   name_tw:'木葉天狗', name_en:'Koppa Tengu',            rarity:1,                grade:7, icon:'youma_kopatengu.png', skills:["毒床歩き","ザン",''], skill4:["ウィンドブレス","ザンマ","タルンダ","野生の勘","火炎耐性"], skill5:['',"チャームディ","メクロズディ","マハジオ","パララディ"],elements:['','','','wk','rs','',''], type:'attack'            },
            {                name:'アガシオン',     name_tw:'阿珈席翁', name_en:'Agathion',         rarity:1,                grade:5, icon:'youma_agasion.png', skills:["カースディ","ジオ",''], skill4:["マハジオ","ヒートウェイブ","クロズディ","初段の強運","呪殺耐性"], skill5:['',"マハラギ","メクロズディ","ザン","初段の強運"],elements:['','rs','wk','rs','','','wk'], type:'attack'            }
        ]
    },
    {
        name:'龍王',
        name_tw:'龍王',
        name_en:'Snake',
        formulas:[
            ['龍神','墮天使'],
            ['龍神','邪神'],
            ['龍神','外道'],
            ['天使','靈鳥'],
            ['妖魔','幻魔'],
            ['妖精','聖獸'],
            ['妖精','幻魔'],
            ['墮天使','靈鳥'],
            ['妖鬼','墮天使'],
            ['夜魔','天使'],
            ['外道','幻魔'],
            ['外道','妖魔'],
            ['魔王','破壞神'],
            ['魔王','外道'],
            ['邪鬼','龍神']
        ],
        devils:[
            {   name:'アナンタ',      name_tw:'阿南塔', name_en:'Ananta',         rarity:5,                grade:83, icon:'ryuuou_ananta.png' , skills:["ディアラハン","スクカオート","ラクカオート"], skill4:["天罰","マハブフダイン","マハポイズマオン","タルカオート","氷結吸収"], skill5:['',"ギガントマキア","毒追撃","マハザンダイン","衝撃耐性"],elements:['','','nu','nu','wk','nu',''], type:'support'           },
            {   name:'ユルング',      name_tw:'虹蛇', name_en:'Yurlungur',         rarity:4,                grade:70, icon:'ryuuou_yurungu.png', skills:["マハシバブー","サマリカーム","マハブフーラ"], skill4:["三段の強運","ブフダイン","ディアラマ","毒無効","火炎耐性"], skill5:['',"溶解ブレス","リカームドラ","毒追撃","マハンマ"], elements:['','wk','nu','rs','','','wk'], type:'support'            },
            {   name:'ヤマタノオロチ',    name_tw:'八岐大蛇', name_en:'Orochi',           rarity:4,                grade:61, icon:'ryuuou_yamatanooroti.png', skills:["ブフダイン","メガトンプレス","毒床無効"], skill4:["バリア","アギダイン","リカームドラ","タルカオート","破魔無効"], skill5:['',"毒床歩き","デカジャ","吸魔","ミナゴロシの愉悦"],elements:['','nu','nu','wk','','',''], type:'attack'            },
            {   name:'ゲンブ',        name_tw:'玄武', name_en:'Gui Xian',       rarity:3,                grade:45, icon:'ryuuou_genbu.png', skills:["ブフーラ","マハブフーラ","氷結ブースタ"], skill4:["ラクカジャ","ブフダイン","マカラコワース","勝利の息吹","物理耐性"], skill5:['',"毒床歩き","初段の剛力","スラッシュ","乱れ狂い"],elements:['','wk','nu','','','',''], type:'attack'            },
            {   name:'ナーガ',        name_tw:'那迦', name_en:'Naga',       rarity:2,                grade:28, icon:'ryuuou_naga.png', skills:["絶命剣","ブフーラ","百発百中"], skill4:["リベリオン","デスバウンド","デゾレト","二分の活泉","氷結無効"], skill5:['',"突撃","見切り","メポズムディ","ヒートウェイブ"],elements:['','wk','rs','rs','wk','','wk'], type:'attack'            },
            {   name:'ノズチ',        name_tw:'野槌', name_en:'Nozuchi',       rarity:1,                grade:15, icon:'ryuuou_nozuti.png', skills:["一分の活泉","マハジオ",''], skill4:["暴れまくり","ジオンガ","カースディ","百発百中","火炎耐性"], skill5:['',"マハザン","メチャームディ","なぎ払い","パララディ"],elements:['rs','wk','rs','rs','wk','','wk'],type:'attack'            }
        ]
    },
    {
        name:'魔獸',
        name_tw:'魔獸',
        name_en:'Beast',
        formulas:[
            ['龍神','魔神'],
            ['龍神','妖獸'],
            ['龍王','大天使'],
            ['龍王','神獸'],
            ['墮天使','鬼神'],
            ['妖鬼','幻魔'],
            ['妖獸','神獸'],
            ['妖獸','夜魔'],
            ['外道','妖獸'],
            ['魔王','聖獸'],
            ['幽鬼','靈鳥'],
            ['幽鬼','破壞神'],
            ['幽鬼','魔王']
        ],
        devils:[
            {                name:'ケルベロス',     name_tw:'地獄犬', name_en:'Cerberus',          rarity:4,                grade:61, icon:'majyuu_keruberosu.png', skills:["アギダイン","地獄の獰爪","雄叫び"], skill4:["二分の活泉","ファイアブレス","勇奮の鼓舞","追い打ち","物理耐性"], skill5:['',"緊縛追撃","反撃","ヒートウェイブ","初段の猛速"],elements:['','rp','wk','','','',''], type:'attack'            },
            {                name:'アーマーン',     name_tw:'阿米特', name_en:'Ammut',          rarity:3,                grade:44, icon:'majyuu_aman.png', skills:["リベリオン","デスタッチ","狂乱の剛爪"], skill4:["二段の猛速","暴飲暴食","雄叫び","魅了無効","氷結耐性"], skill5:['',"ジオ","暴れまくり","初段の恵体","マハブフ"],elements:['','','wk','nu','','',''], type:'attack'            },
            {                name:'オルトロス',     name_tw:'雙頭犬', name_en:'Orthrus',          rarity:2,                grade:35, icon:'majyuu_orutorosu.png', skills:["アギラオ","丸かじり","マハラギ"], skill4:["金剛発破","ファイアブレス","リカーム","緊縛耐性","電撃耐性"], skill5:['',"メクロズディ","ウィークディ","初段の剛力","ヒートウェイブ"],elements:['','nu','wk','','','','rs'], type:'attack'            },
            {                name:'ネコマタ',       name_tw:'貓怪', name_en:'Nekomata',      rarity:1,                grade:14, icon:'majyuu_nekomata.png', skills:["チャームディ","マハザン",''], skill4:["スクカジャ","ザンマ","アムリタ","魅了耐性","氷結耐性"], skill5:['',"マハブフ","乱れ狂い","暴れまくり","マハンマ"],elements:['','rs','wk','wk','rs','',''], type:'support'            },
            {                name:'イヌガミ',       name_tw:'犬神', name_en:'Inugami',        rarity:1,                grade:9, icon:'majyuu_inugami.png', skills:["アギ","パララディ",''], skill4:["マハラギ","アギラオ","ラクンダ","緊縛耐性","呪殺耐性"], skill5:['',"地獄のマスク","初段の賢魔","メパララディ","ムド"],elements:['','rs',"	弱",'','','',''], type:'support'            },
            {                name:'カーシー',       name_tw:'犬妖', name_en:'Cu Sith',        rarity:1,                grade:3, icon:'majyuu_kasi.png', skills:["スラッシュ","アギ",''], skill4:["アムリタ","甘噛み","タルカジャ","一分の活泉","火炎耐性"], skill5:['',"ポズムディ","地獄のマスク","初段の猛速","ディア"],elements:['','','','','','nu',''], type:'support'            }
        ]
    },
    {
        name:'妖精',
        name_tw:'妖精',
        name_en:'Fairy',
        formulas:[
            ['妖魔','神獸'],
            ['妖魔','天使'],
            ['龍王','女神'],
            ['龍王','天使'],
            ['魔獸','幻魔'],
            ['邪鬼','天使'],
            ['鬼女','女神'],
            ['夜魔','聖獸'],
            ['夜魔','龍王'],
            ['夜魔','魔獸'],
            ['妖獸','天使'],
            ['妖獸','妖鬼'],
            ['外道','鬼神'],
            ['魔王','靈鳥']
        ],
        devils:[
            {                name:'オベロン',        name_tw:'奧伯隆',  name_en:'Oberon',      rarity:4,                grade:67, icon:'yousei_oberon.png', skills:["衝撃ブースタ","ザンダイン","マハマリカリオン"], skill4:["マカラカーン","ツイスター","メチャームディ","スクカオート","氷結耐性"], skill5:['',"スラッシュ","初段の恵体","タルカジャ","吸魔"],elements:['','','','wk','rp','',''], type:'attack'            },
            {                name:'ティターニア',    name_tw:'提泰妮婭', name_en:'Titania',           rarity:4,                grade:62, icon:'yousei_teitania.png', skills:["電撃ブースタ","マハジオンガ","マカジャマオン"], skill4:["二分の魔脈","ショックウェーブ","常世の祈り","追い打ち","物理耐性"], skill5:['',"タルンダ","マハムド","絶命剣","放電"],elements:['','','','','','rs','rs'], type:'support'            },
            {                name:'セタンタ',        name_tw:'瑟坦特', name_en:'Setanta',       rarity:3,                grade:47, icon:'yousei_setanta.png', skills:["鬼神楽","千発千中","金剛発破"], skill4:["デスバウンド","ザンマ","タルカジャ","狂戦士","電撃耐性"], skill5:['',"初段の恵体","ジオ","カースディ","ヒートウェイブ"],elements:['','','','wk','nu','','wk'], type:'attack'           },
            {                name:'シルキー',        name_tw:'希路奇', name_en:'Silky',       rarity:3,                grade:42, icon:'yousei_siruki.png', skills:["メウィークディ","虚弱無効","ブフダイン"], skill4:["メディラ","マハブフーラ","リディア","奈落のマスク","衝撃無効"], skill5:['',"コロシの愉悦","なぎ払い","毒床歩き","野生の勘"],elements:['','wk','nu','','','',''], type:'support'            },
            {                name:'ケルピー',        name_tw:'凱爾皮', name_en:'Kelpie',       rarity:2,                grade:35, icon:'yousei_kerupi.png', skills:["ディアラ","ジオンガ","暴れまくり"], skill4:["ダークゾーン無効","吸魔","リディア","野生の勘","呪殺耐性"], skill5:['',"百発百中","マハジオ","百発百中","ジオ"],elements:['','','rs','','wk','',''], type:'heal'            },
            {                name:'ハイピクシー',      name_tw:'高等皮克希', name_en:'High Pixie',         rarity:2,                grade:24, icon:'yousei_hiipikusi.png', skills:["デゾレト","メディア","マハジオ"], skill4:["リディア","放電","ディアラ","乱れ狂い","破魔耐性"], skill5:['',"初段の賢魔","ムド","アギ","初段の剛力"],elements:['','','','','rs','',''], type:'heal'            },
            {                name:'ジャックランタン',  name_tw:'燈籠傑克', name_en:'Pyro Jack',             rarity:1,                grade:13, icon:'yousei_jyakurantan.png', skills:["アギ","マハラギ",''], skill4:["アギラオ","ファイアブレス","バトンタッチ","一分の魔脈","衝撃耐性"], skill5:['',"マハンマ","クロズディ","初段の賢魔","自然治癒"],elements:['','rs','wk','','','',''], type:'attack'            },
            {                name:'ジャックフロスト',  name_tw:'冰霜傑克', name_en:'Jack Frost',             rarity:1,                grade:7, icon:'yousei_jyakufurosuto.png', skills:["ブフ","マハブフ",''], skill4:["ハマ","ブフーラ","バトンタッチ","反撃","電撃耐性"], skill5:['',"メカースディ","自然治癒","見切り","パララディ"],elements:['','wk','rs','','','',''], type:'attack'            },
            {                name:'ピクシー',         name_tw:'皮克希', name_en:'Pixie',      rarity:1,                grade:2, icon:'yousei_pikusi.png' , skills:["ザン","ディア",''], skill4:["回復ブースタ","マハジオ","メディア","魔封耐性","破魔耐性"], skill5:['',"初段の賢魔","メカースディ","メチャームディ","地獄のマスク"],elements:['','','','rs','','','wk'], type:'heal'           }
        ]
    },
    {
        name:'邪鬼',
        name_tw:'邪鬼',
        name_en:'Jaki',
        highlight:false,
        formulas:[
            ['妖魔','地母神'],
            ['妖鬼','聖獸'],
            ['鬼女','妖鬼'],
            ['邪神','妖精'],
            ['邪神','妖鬼'],
            ['邪神','夜魔'],
            ['外道','地母神'],
            ['魔王','妖鬼'],
            ['魔王','夜魔'],
            ['幽鬼','天使']
            
        ],
        devils:[
            { name:'じゃあくフロスト',      name_tw:'邪惡傑克',  name_en:'Black Frost',      rarity:5,      grade:81, icon:'jyaki_jyaakufurosuto.png', skills:["マハブフダイン","苦悶の呪印","ごーとぅーへる"], skill4:['マハラギオン','ヘルズアイ','コンセントレイト','氷結ハイブースタ','火炎無効'], skill5:['','無慈悲な一撃','狂い咲き','アイスエイジ','破魔耐性'],elements:['','rs','nu','','','wk','nu'], type:'attack'            },
            { name:'ヘカトンケイル',      name_tw:'百臂巨人',  name_en:'Hecatoncheires',      rarity:4,      grade:74, icon:'jyaki_hekatonkeiru.png', skills:['メガトンプレス','コロシの愉悦','タルタロスの牢番'], skill4:['ラクカオート','暴飲暴食','チャージ','三分の活泉','物理吸収'], skill5:['','物理ブースタ','呪い追撃','溶解ブレス','破魔耐性'],elements:['nu','','','','wk','wk',''], type:'attack'            },
            { name:'クドラク',      name_tw:'古德拉克',  name_en:'Kudlak',      rarity:4,      grade:67, icon:'jyaki_kudoraku.png', skills:['エナジードレイン','苦悶の呪印','闇のパンデミア'], skill4:['二分の魔脈','ムドダイン','マハデゾレトオン','食いしばり','呪殺吸収'], skill5:['','呪い追撃','マハポイズマオン','追い打ち','破魔耐性'],elements:['','rs','','','','wk','nu'], type:'support'            },
            { name:'ラクシャーサ',      name_tw:'羅剎',  name_en:'Rakshasa',      rarity:4,      grade:61, icon:'jyaki_rakusyasa.png', skills:['絶命剣','チャージ','涅哩底王'], skill4:['食いしばり','暗夜剣','挑発','猛反撃','衝撃無効'], skill5:['','五月雨斬り','二段の猛速','呪い追撃','スピードスター'],elements:['rs','','','wk','','wk',''], type:'attack'            },
            { name:'グレンデル',      name_tw:'格倫戴爾',  name_en:'Grendel',      rarity:3,      grade:51, icon:'jyaki_gurenderu.png', skills:['デスバウンド','モータルジハード','苦悩の呪印'], skill4:['二分の活泉','金剛発破','チャージ','千発千中','衝撃耐性'], skill5:['','バインドクロー','食いしばり','猛反撃','野生の勘'],elements:['rs','','','','wk','',''], type:'attack'            },
            { name:'イッポンダタラ',      name_tw:'一本踏鞴',  name_en:'Ippon-Datara',      rarity:2,      grade:26, icon:'jyaki_ipondatara.png', skills:['ムドオン','鬼神楽','苦悩の呪印'], skill4:['マハジュ','なぎ払い','タルカジャ','追い打ち','破魔耐性'], skill5:['','','','',''],elements:['','rs','','','','wk',''], type:'attack'            },
            { name:'グレムリン',      name_tw:'小精靈',  name_en:'Gremlin',      rarity:1,      grade:11, icon:'jyaki_guremurin.png', skills:['ジオ','ブフ',''], skill4:['突撃','ムド','マカジャマ','一分の魔脈','火炎耐性'], skill5:['','','','',''],elements:['','wk','rs','rs','wk','',''], type:'attack'            }
        ]
    },
    {
        name:'墮天使',
        name_tw:'墮天使',
        name_en:'Fallen',
        formulas:[
            ['龍神','破壞神'],
            ['龍神','魔王'],
            ['魔神','大天使'],
            ['魔獸','天使'],
            ['魔獸','妖魔'],
            ['妖鬼','魔獸'],
            ['夜魔','大天使'],
            ['夜魔','女神'],
            ['邪神','幻魔'],
            ['邪神','天使'],
            ['妖獸','鬼女'],
            ['外道','女神'],
            ['外道','天使'],
            ['幽鬼','大天使']
        ],
        devils:[
            {                name:'サマエル',       name_tw:'薩麥爾', name_en:'Samael',        rarity:5,                grade:84, icon:'datensi_samaeru.png', skills:["勝利のチャクラ","メシアライザー","神の悪意"], skill4:["デスカウンター","煉獄","テトラカーン","無限のチャクラ","火炎無効"], skill5:['',"ファイアブレス","ムドダイン","ウィンドブレス","回復ブースタ"],elements:['','','','wk','','rp','rp'], type:'support'            },
            {                name:'ダンタリアン',   name_tw:'但他林', name_en:'Dantalian',            rarity:4,                grade:70, icon:'datensi_dantarian.png', skills:["マカラカーン","フォッグブレス","ハマダイン"], skill4:["二分の魔脈","暴飲暴食","バインドボイス","マカラカシフト","呪殺反射"], skill5:['',"バインドボイス","アイスブレス","挑発","二段の強運"],elements:['','rs','rs','wk','nu','wk','rs'], type:'support'            },
            {                name:'オセ',          name_tw:'歐賽', name_en:'Ose',     rarity:3,                grade:54, icon:'datensi_ose.png', skills:["冥界破","マハジオンガ","チャージ"], skill4:["猛反撃","メガトンプレス","テトラカーン","二段の剛力","物理無効"], skill5:['',"アギ","チャームディ","メディア","乱れ狂い"],elements:['','','','','','','rs'], type:'attack'            },
            {                name:'フォルネウス',   name_tw:'佛鈕司', name_en:'Forneus',            rarity:3,                grade:41, icon:'datensi_huoruneosu.png', skills:["ブフーラ","マハジオ","フォッグブレス"], skill4:["電撃耐性","マハブフーラ","マハシバブー","氷結ブースタ","破魔無効"], skill5:['',"初段の猛速","メクロズディ","ジオ","チャームディ"],elements:['','','rp','wk','','','nu'], type:'support'            },
            {                name:'デカラビア',     name_tw:'丹卡拉比', name_en:'Decarabia',          rarity:2,                grade:23, icon:'datensi_dekarabia.png', skills:["マハラギ","マハブフ","ブフ"], skill4:["マリンカリン","アギラオ","メクロズディ","魔封耐性","氷結耐性"], skill5:['',"ディア","マハジオ","ポズムディ","パララディ"],elements:['','','','','',"	弱",'rs'], type:'attack'            },
            {                name:'エリゴール',     name_tw:'埃力格', name_en:'Eligor',          rarity:1,                grade:10, icon:'datensi_erigoru.png', skills:["ムド","なぎ払い",''], skill4:["食いしばり","絶命剣","ラクカジャ","反撃","破魔耐性"], skill5:['',"ディア","初段の賢魔","チャームディ","チャームディ"],elements:['rs','','','wk','','','nu'], type:'attack'            },
            {                name:'メルコム',       name_tw:'梅爾克', name_en:'Melchom',        rarity:1,                grade:4, icon:'datensi_merukomu.png', skills:["ディア","アギ",''], skill4:["ファイアブレス","マハラギ","カースディ","一分の魔脈","物理耐性"], skill5:['',"毒床歩き","コロシの愉悦","スラッシュ","ムド"],elements:['','rs','wk','','wk','wk','rs'], type:'heal'            }
        ]
    },
    {
        name:'妖鬼',
        name_tw:'妖鬼',
        name_en:'Brute',
        formulas:[
            ['妖魔','大天使'],
            ['魔獸','龍王'],
            ['妖精','破壞神'],
            ['妖精','鬼神'],
            ['鬼女','靈鳥'],
            ['鬼女','妖魔'],
            ['邪神','墮天使'],
            ['邪神','鬼女'],
            ['妖獸','聖獸'],
            ['幽鬼','龍王'],
            ['幽鬼','墮天使'],
            ['幽鬼','外道']
        ],
        devils:[
            {                name:'オンギョウキ',     name_tw:'隱形鬼', name_en:'Ongyo-Ki',          rarity:4,                grade:68, icon:'youki_ongyouki.png', skills:["暗夜剣","ラクカオート","マハブフーラ"], skill4:["デスタッチ","虚空爪激","宵闇の調べ","デスカウンター","呪殺無効"], skill5:['',"反撃","魅了追撃","初段の強運","ウィンドブレス"],elements:['rs','','rs','','rs','wk',''], type:'attack'            },
            {                name:'ベルセルク',       name_tw:'狂戰士', name_en:'Berserker',        rarity:3,                grade:54, icon:'youki_beruseruku.png', skills:["チャージ","暗夜剣","マハブフ"], skill4:["不屈の闘志","メガトンプレス","リベリオン","猛反撃","氷結無効"], skill5:['',"ソウルドレイン","初段の賢魔","クロズディ","野生の勘"],elements:['nu','','','','wk','',''], type:'attack'            },
            {                name:'シキオウジ',       name_tw:'式王子', name_en:'Shiki-Ougi',        rarity:3,                grade:49, icon:'youki_sikiouji.png', skills:["魔封耐性","ハマ","ムド"], skill4:["デカジャ","メギド","ラクンダ","追い打ち","氷結耐性"], skill5:['',"メウィークディ","マハラギ","祟り","ディア"],elements:['nu','wk','wk','','','rs','rs'], type:'attack'            },
            {                name:'ヨモツイクサ',     name_tw:'黃泉軍', name_en:'Ikusa',          rarity:3,                grade:41, icon:'youki_yomotuikusa.png', skills:["毒耐性","アイスブレス","マハムドオン"], skill4:["無慈悲な一撃","刹那五月雨撃ち","ジュオン","ミナゴロシの愉悦","破魔耐性"], skill5:['',"クロズディ","初段の恵体","メカースディ","メウィークディ"],elements:['','','','','wk','wk','rs'], type:'attack'            },
            {                name:'オ二',            name_tw:'鬼', name_en:'Oni',   rarity:2,                grade:27, icon:'youki_oni.png', skills:["テトラコワース","マハラギ","金剛発破"], skill4:["鬼神楽","五月雨斬り","チャージ","コロシの愉悦","衝撃耐性"],skill5:['',"ヒートウェイブ","アギ","突撃","ポズムディ"], elements:['','','','wk','','',''], type:'attack'            },
            {                name:'モムノフ',         name_tw:'桃生', name_en:'Momunofu',      rarity:1,                grade:15, icon:'youki_momunohu.png', skills:["なぎ払い","反撃",''], skill4:["ヒートウェイブ","鬼神楽","デクンダ","食いしばり","衝撃耐性"], skill5:['',"見切り","アギ","メポズムディ","初段の恵体"],elements:['rs','','','','wk','',''], type:'attack'            },
            {                name:'アズミ',          name_tw:'安曇神', name_en:'Azumi',     rarity:1,                grade:3, icon:'youki_azumi.png', skills:["パララディ","ブフ",''], skill4:["アイスブレス","マハブフ","ディア","一分の活泉","衝撃耐性"], skill5:['',"ジオ","メパララディ","マハジオ","スラッシュ"],elements:['','','rs','wk','','',''], type:'heal'            }
        ]
    },
    {
        name:'鬼女',
        name_tw:'鬼女',
        name_en:'Femme',
        formulas:[
            ['龍神','夜魔'],
            ['妖魔','鬼神'],
            ['龍王','地母神'],
            ['龍王','鬼神'],
            ['魔獸','靈鳥'],
            ['魔獸','地母神'],
            ['邪鬼','女神'],
            ['墮天使','女神'],
            ['妖鬼','女神'],
            ['妖鬼','妖魔'],
            ['夜魔','靈鳥'],
            ['夜魔','鬼神'],
            ['幽鬼','幻魔'],
            ['幽鬼','夜魔']
        ],
        devils:[
            {                name:'ランダ',          name_tw:'讓特', name_en:'Rangda',    rarity:4,                grade:67, icon:'kijyo_randa.png', skills:["マハジュオン","ムドダイン","マハザンダイン"], skill4:["空間殺法","煉獄","リカームドラ","食いしばり","衝撃無効"], skill5:['',"ウィンドブレス","マハブフーラ","デカジャ","吸魔"],elements:['rp','','','wk','','',''] , type:'attack'           },
            {                name:'ダーキニー',      name_tw:'荼吉尼', name_en:'Dakini',         rarity:3,                grade:53, icon:'kijyo_dakini.png', skills:["バリアコワース","アギラオ","怪力乱神"], skill4:["ポイズマオン","アギダイン","マハマカジャマ","毒無効","氷結耐性"], skill5:['',"毒ガスブレス","ショックウェーブ","初段の賢魔","野生の勘"],elements:['rs','rp','wk','','','',''], type:'support'            },
            {                name:'マーメイド',      name_tw:'美人魚', name_en:'Mermaid',         rarity:3,                grade:42, icon:'kijyo_mameido.png', skills:["アイスブレス","ウィンドブレス","メディア"], skill4:["セクシーダンス","ブフダイン","メチャームディ","無限のチャクラ","氷結無効"], skill5:['',"クロズディ","暴れまくり","パララディ","暴れまくり"],elements:['','','rs','wk','rs','',''] , type:'heal'           },
            {                name:'ヤクシニー',      name_tw:'夜叉女', name_en:'Yaksini',         rarity:2,                grade:34, icon:'kijyo_yakusini.png', skills:["呪い耐性","アギラオ","マハザン"], skill4:["刹那五月雨撃ち","ジオンガ","シバブー","初段の剛力","物理耐性"], skill5:['',"ハマ","毒床歩き","マハラギ","初段の猛速"],elements:['','','','wk','rs','',''], type:'attack'            },
            {                name:'ヨモツシコメ',    name_tw:'黃泉醜女', name_en:'Shikome',           rarity:2,                grade:23, icon:'kijyo_yomotusikome.png', skills:["タルンダ","毒針","ブフーラ"], skill4:["バインドクロー","デスバウンド","ウィークディ","見切り","衝撃耐性"], skill5:['',"突撃","アギ","パララディ","ザン"],elements:['','wk','','','','wk','rs'] , type:'support'           },
            {                name:'リャナンシー',    name_tw:'菈南希', name_en:'Leanan Sidhe',           rarity:1,                grade:12, icon:'kijyo_ryanansi.png', skills:["ディア","ブフ",''], skill4:["メディア","ムドオン","リカーム","毒耐性","衝撃耐性"], skill5:['',"自然治癒","ハマ","地獄のマスク","なぎ払い"],elements:['','','','','wk','',''], type:'heal'            }
        ]
    },
    {
        name:'夜魔',
        name_tw:'夜魔',
        name_en:'Night',
        formulas:[
            ['龍神','妖精'],
            ['龍神','妖鬼'],
            ['龍神','鬼女'],
            ['天使','鬼神'],
            ['妖魔','靈鳥'],
            ['龍王','妖魔'],
            ['妖精','靈鳥'],
            ['妖精','魔神'],
            ['妖鬼','妖精'],
            ['鬼女','幻魔'],
            ['妖獸','魔神'],
            ['妖獸','墮天使'],
            ['魔王','妖精'],
            ['魔王','妖獸'],
            ['幽鬼','妖獸']
        ],
        devils:[
            {   name:'リリス',        name_tw:'莉莉絲', name_en:'Lilith',       rarity:5,                grade:80, icon:'yoma_ririsu.png', skills:["マハジオダイン","エナジードレイン","肉体の解放"], skill4:["狂い咲き","精神漏出","サマリカーム","三段の強運","破魔無効"], skill5:['',"毒床渡り","タルンダ","煉獄","衝撃耐性"],elements:['','rs','rs','rp','wk','wk','nu'], type:'support'            },
            {   name:'サキュバス',    name_tw:'女夢魔', name_en:'Succubus',           rarity:4,                grade:63, icon:'yoma_sakyubasu.png', skills:["マハマリンカリン","魅了追撃","ブフダイン"], skill4:["吸魔","マハジオンガ","マハデゾレト","魅了無効","破魔耐性"], skill5:['',"吸血","マハブフーラ","野獣の勘","マハムドオン"],elements:['','rs','rs','','','wk',''], type:'support'            },
            {   name:'リリム',        name_tw:'莉莉姆', name_en:'Lilim',       rarity:3,                grade:47, icon:'yoma_ririmu.png', skills:["魅了耐性","マハザンマ","マリンカリン"], skill4:["吸魔","ザンダイン","メクロズディ","二段の賢魔","電撃無効"], skill5:['',"初段の強運","ブフ","ウィークディ","ジオ"],elements:['','','wk','','nu','',''], type:'support'            },
            {   name:'キオン',        name_tw:'迦溫',   name_en:'Kaiwan',     rarity:3,                grade:42, icon:'yoma_kiun.png', skills:["ムドオン","マハムド","呪殺ブースタ"], skill4:["スクカジャ","マハムドオン","マカラコワース","食いしばり","氷結耐性"], skill5:['',"初段の賢魔","初段の強運","コロシの愉悦","マハンマ"],elements:['','','wk','','','wk','nu'], type:'attack'            },
            {   name:'フォーモリア',   name_tw:'弗莫爾', name_en:'Fomorian',            rarity:2,                grade:30, icon:'yoma_huomoria.png' , skills:["マハブフ","金剛発破","ハマオン"], skill4:["追い打ち","ブフーラ","リベリオン","二分の活泉","破魔耐性"], skill5:['',"ムド","ザン","ブフ","マハラギ"],elements:['','wk','rs','','','',''], type:'attack'           },
            {   name:'インキュバス',   name_tw:'男夢魔', name_en:'Incubus',            rarity:2,                grade:21, icon:'yoma_inkyubasu.png', skills:["マリンカリン","ムドオン","ザン"], skill4:["吸血","マハザン","メパララディ","魅了追撃","氷結耐性"], skill5:['',"マハムド","乱れ狂い","地獄のマスク","コロシの愉悦"],elements:['','','','wk','rs','',''], type:'support'            },
            {   name:'ザントマン',     name_tw:'睡魔', name_en:'Sandman',          rarity:1,                grade:10, icon:'yoma_zandoman.png', skills:["ザン","スラッシュ",''], skill4:["シバブー","暗夜剣","スクンダ","超自然治癒","氷結耐性"], skill5:['',"暴れまくり","ポズムディ","マハジオ","毒床歩き"],elements:['','','','wk','rs','',''], type:'attack'            },
            {   name:'モコイ',         name_tw:'惡靈', name_en:'Mokoi',      rarity:1,                grade:5, icon:'yoma_mokoi.png', skills:["ジオ","突撃",''], skill4:["暴れまくり","ジオンガ","ウィークディ","初段の剛力","呪殺耐性"], skill5:['',"ムド","ヒートウェイブ","毒床歩き","自然治癒"],elements:['','','','rs','wk','',''], type:'attack'            }
        ]
    },
    {
        name:'邪神',
        name_tw:'邪神',
        name_en:'Vile',
        formulas:[
            ['天使','破壞神'],
            ['妖獸','魔獸'],
            ['魔王','天使'],
            ['魔王','魔獸'],
            ['邪鬼','神獸']
        ],
        devils:[
            {  name:'セト',         name_tw:'賽特', name_en:'Seth',      rarity:5,                grade:84, icon:'jyasin_seto.png', skills:["ザンダイン","ランダマイザ","ウアス"], skill4:["ティタノマキア","血管断ち","宵闇の調べ","衝撃ハイブースタ","火炎耐性"], skill5:['',"甘噛み","三段の強運","空間殺法","暗殺者"],elements:['','wk','','nu','nu','','rp'], type:'attack'            },
            {  name:'ギリメカラ',    name_tw:'獨眼魔象', name_en:'Girimehkala',           rarity:4,                grade:67, icon:'jyasin_girimekara.png', skills:["呪殺耐性","反逆の魔象","メガトンプレス"], skill4:["バインドボイス","暴飲暴食","ラクンダ","ミナゴロシの愉悦","衝撃耐性"], skill5:['',"審判の光","アギダイン","クロズディ","ブフーラ"],elements:['rp','','','wk','wk','wk',''], type:'attack'            },
            {  name:'パズス',        name_tw:'帕祖祖', name_en:'Pazuzu',       rarity:4,                grade:62, icon:'jyasin_pazusu.png', skills:["火炎耐性","メディラマ","煉獄"], skill4:["ホワイトノイズ","マハムドダイン","サマリカーム","デスカウンター","破魔無効"], skill5:['',"魔封耐性","メディア","ザンマ","デスバウンド"],elements:['','','wk','','nu','','nu'], type:'heal'            },
            {  name:'アラハバキ',    name_tw:'荒霸吐', name_en:'Arahabaki',           rarity:3,                grade:50, icon:'jyasin_arahabaki.png', skills:["メギド","マカラカーン","コンセントレイト"], skill4:["エナジードレイン","アイスブレス","メポズムディ","マカラカシフト","氷結無効"], skill5:['',"なぎ払い","乱れ狂い","ムド","メチャームディ"],elements:['rs','wk','wk','wk','wk','rs','rs'], type:'attack'            },
            {  name:'バフォメット',  name_tw:'巴風特', name_en:'Baphomet',             rarity:3,                grade:41, icon:'jyasin_bahuometo.png', skills:["マハムド","吸血","マハラギ"], skill4:["二分の魔脈","ムドダイン","マハポイズマ","呪殺ブースタ","破魔耐性"], skill5:['',"暴れまくり","マハブフ","野生の勘","ジオ"],elements:['','','','','','wk','nu'], type:'attack'            },
            {  name:'アブラクサス',  name_tw:'亞布拉薩', name_en:'Abraxas',             rarity:2,                grade:26, icon:'jyasin_aburakusasu.png', skills:["デクンダ","タルカジャ","ブフーラ"], skill4:["ラクカジャ","金剛発破","アムリタ","地獄のマスク","呪殺無効"], skill5:['',"マハラギ","初段の賢魔","マハラギ","乱れ狂い"],elements:['rp','wk','wk','wk','wk','wk','wk'], type:'support'            }
        ]
    },
    {
        name:'妖獸',
        name_tw:'妖獸',
        name_en:'Wilder',
        formulas:[
            ['幻魔','大天使'],
            ['龍神','魔獸'],
            ['邪鬼','魔獸'],
            ['妖鬼','大天使'],
            ['鬼女','墮天使'],
            ['夜魔','魔神'],
            ['邪神','妖魔'],
            ['外道','靈鳥'],
            ['外道','魔獸'],
            ['外道','妖鬼'],
            ['外道','鬼女'],
            ['魔王','大天使'],
            ['幽鬼','地母神'],
            ['幽鬼','妖魔'],
            ['幽鬼','魔獸']
        ],
        devils:[
            {   name:'フェンリル',    name_tw:'芬里爾', name_en:'Fenrir',           rarity:4,                grade:61, icon:'youjyuu_huenriru.png', skills:["虚空爪激","二段の猛速","タルカオート"], skill4:["丸かじり","冥界破","マカラコワース","スピードスター","衝撃耐性"], skill5:['',"呪殺耐性","丸かじり","メウィークディ","ハマ"],elements:['','wk','rp','rs','wk','',''], type:'support'            },
            {   name:'ピアレイ',     name_tw:'皮亞雷', name_en:'Peallaidh',          rarity:3,                grade:46, icon:'youjyuu_piarei.png', skills:["マハデゾレト","狂い咲き","マハムドオン"], skill4:["毒ガスブレス","イービルアイ","コンセントレイト","地獄のマスク","破魔耐性"], skill5:['',"ジオ","マハラギ","初段の猛速","毒床歩き"],elements:['','wk','rs','','','wk',''], type:'support'            },
            {   name:'モスマン',     name_tw:'天蛾人', name_en:'Mothman',          rarity:3,                grade:41, icon:'youjyuu_mosuman.png', skills:["緊縛耐性","マハジオ","マハシバブー"], skill4:["一分の魔脈","ジオダイン","シバブオン","狂い咲き","火炎無効"], skill5:['',"ザン","ヒートウェイブ","見切り","メパララディ"],elements:['','','','rs','wk','',''], type:'support'            },
            {   name:'ヌエ',         name_tw:'鵺', name_en:'Nue',      rarity:2,                grade:25, icon:'youjyuu_nue.png', skills:["マハジオ","ジオ","丸かじり"], skill4:["バインドクロー","ジオンガ","ラクンダ","初段の剛力","物理耐性"], skill5:['',"メカースディ","スラッシュ","ポズムディ","野生の勘"],elements:['','','','rs','wk','',''], type:'attack'            },
            {   name:'ライジュウ',    name_tw:'雷獸', name_en:'Raijuu',           rarity:2,                grade:20, icon:'youjyuu_raijyuu.png', skills:["虚弱耐性","ジオンガ","放電"], skill4:["食いしばり","バインドクロー","バリアコワース","初段の猛速","電撃無効"], skill5:['',"ハマ","クロズディ","初段の恵体","クロズディ"],elements:['','','','rs','wk','',''], type:'support'            },
            {   name:'バイコーン',    name_tw:'雙角獸', name_en:'Bicorn',           rarity:1,                grade:9, icon:'youjyuu_baikon.png', skills:["突撃","アギ",''], skill4:["マハラギ","ヒートウェイブ","チャームディ","地獄のマスク","破魔耐性"], skill5:['',"ディア","メパララディ","メディア","メウィークディ"],elements:['','','','','wk','','nu'], type:'attack'            },
            {   name:'チャグリン',    name_tw:'恰古林', name_en:'Chagrin',           rarity:1,                grade:4, icon:'youjyuu_tyagurinn.png', skills:["ウィークディ","ジオ",''], skill4:["放電","マハジオ","スクカジャ","初段の猛速","呪殺耐性"], skill5:['',"百発百中","暴れまくり","ヒートウェイブ","ポズムディ"],elements:['','wk','','rs','','',''], type:'support'            }
        ]
    },
    {
        name:'外道',
        name_tw:'外道',
        name_en:'Foul',
        formulas:[
            ['妖精','地母神'],
            ['鬼女','天使'],
            ['鬼女','魔獸'],
            ['夜魔','破壞神'],
            ['妖獸','妖精'],
            ['幽鬼','妖鬼'],
            ['幽鬼','鬼女'],
            ['幽鬼','邪神']
        ],
        devils:[
            {   name:'マッドガッサー',     name_tw:'毒氣怪客', name_en:'Mad Gasser',          rarity:3,                grade:45, icon:'gedou_madogasa.png', skills:["マハポイズマ","毒追撃","ムドダイン"], skill4:["地獄のマスク","デスタッチ","バリアコワース","乱れ狂い","呪殺無効"], skill5:['',"ジオ","ハマ","スクカジャ","メチャームディ"],elements:['','','','','','wk','rs'],type:'support'            },
            {   name:'シャドウ',          name_tw:'黑影', name_en:'Shadow',     rarity:2,                grade:35, icon:'gedou_syadou.png', skills:["ラクンダ","マハジオ","ムド"], skill4:["タルカジャ","ムドオン","デゾレト","初段の猛速","氷結耐性"], skill5:['',"地獄のマスク","マハムド","ジオ","初段の強運"],elements:['rs','','','','wk','wk','nu'],type:'support'            },
            {   name:'ブラックウーズ',    name_tw:'黑泥怪', name_en:'Black Ooze',           rarity:2,                grade:25, icon:'gedou_burakuuzu.png', skills:["ジュ","ポイズマ","甘噛み"], skill4:["乱れ狂い","デスタッチ","マハジュ","食いしばり","火炎無効"],skill5:['',"マハザン","ヒートウェイブ","メウィークディ","メカースディ"], elements:['rs','','','wk','','wk','nu'],type:'support'            },
            {   name:'ブロブ',           name_tw:'果凍怪', name_en:'Blob',    rarity:2,                grade:20, icon:'gedou_burobu.png', skills:["ポイズマ","ザン","マハザン"], skill4:["タルンダ","吸魔","マハポイズマ","乱れ狂い","衝撃耐性"], skill5:['',"ウィークディ","ブフ","マハムド","ジオ"],elements:['rs','','wk','','','wk','nu'],type:'support'            },
            {   name:'ファントム',       name_tw:'鬼魅', name_en:'Phantom',        rarity:1,               grade:10, icon:'gedou_huantomu.png', skills:["ジオ","ムド","マハジオ"], skill4:["マハジオ","ジオンガ","デカジャ","地獄のマスク","電撃耐性"], skill5:['',"初段の強運","パララディ","マハムド","マハブフ"],elements:['rs','','','','wk','wk','nu'],type:'attack'            },
            {   name:'スライム',        name_tw:'軟泥怪', name_en:'Slime',       rarity:1,                grade:1, icon:'gedou_suraimu.png', skills:["スラッシュ","一分の活泉",''], skill4:["吸血","吸魔","ポズムディ","反撃","衝撃耐性"], skill5:['',"なぎ払い","野生の勘","初段の猛速","毒床歩き"],elements:['wk','wk','wk','wk','wk','wk',''],type:'attack'            }
        ]
    },
    {
        name:'魔王',
        name_tw:'魔王',
        name_en:'Tyrant',
        formulas:[
            ['幻魔','魔神'],
            ['破壞神','大天使'],
            ['破壞神','魔神'],
            ['龍神','聖獸'],
            ['鬼神','地母神'],
            ['邪鬼','幻魔'],
            ['龍王','破壞神'],
            ['墮天使','破壞神'],
            ['邪神','破壞神']
        ],
        devils:[
            {   name:'ルシファー',     name_tw:'露西法', name_en:'Lucifer',          rarity:5,                grade:98, icon:'maou_rusifua.png', skills:["メギドラオン","トリスアギオン","明けの明星"], skill4:["三段の恵体","精神支配","リカームドラ","大虐殺者","破魔吸収"], skill5:['',"ムドダイン","魅了無効","電撃ブースタ","マリンカリオン"],elements:['rs','','','','','wk','rp'], type:'attack'            },
            {   name:'マーラ',         name_tw:'魔羅', name_en:'Mara',      rarity:5,                grade:90, icon:'maou_mara.png', skills:["緊縛無効","ティタノマキア","地獄突き"], skill4:["メガトンレイド","ソウルドレイン","チャージ","物理貫通","氷結無効"], skill5:['',"三段の剛力",'千発千中',"物理ブースタ","物理耐性"],elements:['','','wk','rp','','rs','rs'], type:'attack'            },
            {   name:'スルト',         name_tw:'史爾特爾', name_en:'Surt',     rarity:5,                grade:83, icon:'maou_suruto.png', skills:["怪力乱神","テトラカシフト","ラグナロク"], skill4:["威圧の構え","マハラギダイン","ディスタブ","火炎貫通","氷結無効"], skill5:['',"地獄の業火","三段の賢魔","火炎ブースタ","丸かじり"],elements:['','rp','wk','','','',''], type:'attack'            },
            {   name:'ロキ',           name_tw:'洛基', name_en:'Loki',    rarity:4,                grade:75, icon:'maou_roki.png', skills:["ザンダイン","アギダイン","トリックスター"], skill4:["ジオダイン","ブフダイン","精神支配","ダークゾーン無効","破魔耐性"], skill5:['',"コロシの愉悦","丸かじり","マハムドオン","ムドオン"],elements:['','','nu','','rs','wk','rs'], type:'attack'           },
            {   name:'ベルゼブブ',     name_tw:'別西卜', name_en:'Beelzebub',          rarity:4,                grade:68, icon:'maou_beruzebubu.png', skills:["ムドダイン","マハジオンガ","暴食の大罪"], skill4:["野獣の勘","ショックウェーブ","混沌の海","マカラカシフト","破魔反射"], skill5:['',"マハデゾレトオン","物理耐性","コロシの愉悦","電撃耐性"],elements:['','','','rs','rs','nu','nu'], type:'attack'            },
            {   name:'キングフロスト',     name_tw:'冰傑克王', name_en:'King Frost',          rarity:4,                grade:64, icon:'maou_jyakuhurosuto.png', skills:["氷結ブースタ","メガトンプレス","大冷界"], skill4:['',"絶対零度","コンセントレイト","三段の強運","火炎耐性"], skill5:['',"ブフダイン","暴飲暴食","地獄のマスク","緊縛耐性"],elements:['','wk','nu','','','rs',''], type:'attack'            },
            {   name:'アバドン',       name_tw:'阿巴頓', name_en:'Abaddon',        rarity:4,                grade:60, icon:'maou_abadon.png', skills:["猛反撃","マハラギオン","暴飲暴食"], skill4:["地獄の業火","メガトンレイド","溶解ブレス","コロシの愉悦","物理無効"], skill5:['',"初段の猛速","地獄のマスク","ジュ","メクロズディ"],elements:['','rp','','wk','','',''], type:'attack'            },
            {   name:'オーカス',       name_tw:'奧迦斯', name_en:'Horkos',        rarity:3,                grade:46, icon:'maou_okasu.png', skills:["食いしばり","猛反撃","地獄の業火"], skill4:["ラクカオート","捨て身の一撃","テトラコワース","二段の恵体","氷結無効"], skill5:['',"マハブフ","ザン","野生の勘","自然治癒"],elements:['rs','','wk','','','wk',''], type:'attack'            }
        ]
    },
    {
        name:'幽鬼',
        name_tw:'幽鬼',
        name_en:'Haunt',
        formulas:[
            ['魔獸','女神'],
            ['邪鬼','妖魔'],
            ['妖精','女神'],
            ['邪神','大天使'],
            ['妖獸','大天使'],
            ['妖獸','破壞神'],
            ['妖獸','地母神'],
            ['外道','妖精'],
            ['外道','邪神'],
            ['魔王','女神'],
            ['魔王','鬼神'],
            ['魔王','邪神']
        ],
        devils:[
            {   name:'ヴェータラ',        name_tw:'毘陀羅', name_en:'Vetala',       rarity:3,                grade:55, icon:'yuuki_vetara.png', skills:["リディアコワース","ブフダイン","丸かじり"], skill4:["暴れまくり","エナジードレイン","溶解ブレス","毒耐性","火炎耐性"], skill5:['',"カースディ","初段の猛速","ヒートウェイブ","初段の猛速"],elements:['','wk','','','','wk','nu'], type:'attack'            },
            {   name:'ラフィン・スカル',   name_tw:'笑面骷髏', name_en:'Chatterskull',            rarity:3,                grade:44, icon:'yuuki_rahuinsukaru.png', skills:["ディスコード","ムドオン","デスタッチ"], skill4:["デカジャ","冥界破","雄叫び","緊縛無効","衝撃耐性"], skill5:['',"なぎ払い","ポズムディ","暴れまくり","マハジオ"],elements:['','rp','wk','','','wk','nu'], type:'support'            },
            {   name:'レギオン',          name_tw:'惡靈軍團', name_en:'Legion',     rarity:2,                grade:34, icon:'yuuki_region.png', skills:["マハザン","ムド","アギ"], skill4:["デスバウンド","ウィンドブレス","マカラコワース","衝撃ブースタ","火炎耐性"], skill5:['',"初段の強運","ヒートウェイブ","マハブフ","メウィークディ"],elements:['','','','wk','','wk','rs'], type:'attack'            },
            {   name:'ピシャーチャ',      name_tw:'畢舍遮', name_en:'Pisaca',         rarity:2,                grade:26, icon:'yuuki_pisyatya.png', skills:["マハムド","甘噛み","吸血"], skill4:["ジュ","ムドオン","マハシバブー","毒床渡り","氷結耐性"], skill5:['',"スラッシュ","地獄のマスク","ハマ","百発百中"],elements:['','wk','','','nu','wk','rs'], type:'support'            },
            {   name:'モウリョウ',        name_tw:'魍魎', name_en:'Mou-Ryo',       rarity:2,                grade:20, icon:'yuuki_mouryou.png', skills:["ムド","シバブオン","ファイアブレス"], skill4:["吸魔","イービルアイ","カースディ","初段の賢魔","呪殺反射"], skill5:['',"ウィークディ","暴れまくり","メクロズディ","見切り"],elements:['','','','','','wk','nu'], type:'attack'            },
            {   name:'オバリヨン',        name_tw:'背負小鬼', name_en:'Obariyon',       rarity:1,                grade:7, icon:'yuuki_obariyon.png', skills:["クロズディ","メディア",''], skill4:["突撃","暴れまくり","スクンダ","見切り","火炎耐性"], skill5:['',"乱れ狂い","メカースディ","地獄のマスク","マハンマ"],elements:['','','wk','rs','','wk','nu'], type:'heal'            },
            {   name:'ガキ',             name_tw:'餓鬼', name_en:'Preta',  rarity:1,                grade:4, icon:'yuuki_gaki.png', skills:["ブフ","ムド",''], skill4:["マハブフ","吸血","ディスコード","百発百中","衝撃耐性"], skill5:['',"ヒートウェイブ","メパララディ","マハムド","初段の剛力"],elements:['','wk','rs','','wk','wk','nu'], type:'attack'            }
        ]
    },
    {
        name:'魔人',
        name_tw:'魔人',
        name_en:'Fiend',
        highlight:false,
        formulas:[],
        devils:[
            {   name:'マザーハーロット', name_tw:'巴比倫大淫婦', name_en:'Mother Harlot', rarity:5, grade:95, icon:'majin_mazaharodo.png', skills:['二分の魔脈','女帝のリビドー','バビロンの杯'], skill4:['三段の賢魔','デスタッチ','ランダマイザ','魅了追撃','物理吸収'], skill5:['','テトラカシフト','奈落のマスク','狂い咲き','マカラカシフト'], elements:['nu','','','dr','wk','rs','rs'], type:'support'},
            {   name:'トランペッター', name_tw:'吹號者', name_en:'Trumpeter', rarity:5, grade:94, icon:'majin_toranpeta.png', skills:['コンセントレイト','ソウルドレイン','アポカリプス'], skill4:['マハマカジャオン','ジャッジメント','悪魔の産声','ラクカオート','物理耐性'], skill5:['','寸分の見切り','タルンダオート','トリスアギオン','火炎耐性'], elements:['','','','','','nu','nu'], type:'attack'},
            {   name:'アリス', name_tw:'愛麗絲', name_en:'Alice', rarity:5, grade:89, icon:'majin_arisu.png', skills:['マハムドオン','ムドダイン','死んでくれる？'], skill4:['ソウルドレイン','ヘルズアイ','ネクロ・ドグマ','呪殺ハイブースタ','破魔反射'], skill5:['','絶対零度','超自然治癒','野獣の勘','真理の雷'], elements:['','','','','','wk','rp'], type:'attack'},
            {   name:'ヘルズエンジェル', name_tw:'地獄天使', name_en:'Hell Biker', rarity:4, grade:77, icon:'majin_heruzuenjieru.png', skills:['マハラギオン','スピードスター','レッドゾーン'], skill4:['捨て身の一撃','マハムドオン','リカームドラ','スクカオート','破魔反射'], skill5:['','アギダイン','雄叫び','緊縛追撃','呪殺耐性'], elements:['','rp','','','rs','wk',''], type:'attack'},
            {   name:'ワイトナイト', name_tw:'白騎士', name_en:'White Rider', rarity:4, grade:74, icon:'majin_waitonaito.png', skills:['ジオダイン','ホワイトノイズ','ゴッドアロー'], skill4:['ショックウェーブ','ソウルドレイン','リカームドラ','緊縛無効','衝撃無効'], skill5:['','ブフーラ','百発百中','ヒートウェイブ','ブフ'], elements:['','','','dr','wk','rs','rs'], type:'attack'}
        ]
    },
    {
        name:'英雄',
        name_tw:'英雄',
        name_en:'Hero',
        formulas:[],
        devils:[
            { name:'ヨシツネ', name_tw:'義經', name_en:'Yoshitsune', rarity:5, grade:97, icon:'eiyuu_yositune.png', skills:['空間殺法','勝利のチャクラ','八艘飛び'], skill4:['不屈の闘志','ギガントマキア','チャージ','物理ハイブースタ','物理吸収'], skill5:['','ゴッドハンド','スクカオート','ミナゴロシの愉悦','氷結耐性'], elements:['rs','','','','','nu','nu'], type:'attack'},
            { name:'コウテイ', name_tw:'皇帝', name_en:'Huang Di', rarity:5, grade:88, icon:'eiyuu_koutei.png', skills:['冥界破','帝の権威','応龍撃破'], skill4:['','怪力乱神','メシアライザー','魅了無効','破魔反射'], skill5:['','タルカオート','物理無効','虐殺者','奈落のマスク'], elements:['','rs','rs','rs','rs','',''], type:'attack'},
            { name:'ラーマ', name_tw:'羅摩', name_en:'Rama', rarity:5, grade:86, icon:'eiyuu_rama.png', skills:['マハブフダイン','貫吸の気魄','ブラフマーストラ'], skill4:['冥界破','エナジードレイン','ラスタキャンディ','氷結貫通','氷結吸収'], skill5:['','勝利のチャクラ','コンセントレイト','アイスエイジ','魔封無効'], elements:['','nu','rs','','','',''], type:'attack'},
            { name:'ジークフリード', name_tw:'齊格飛', name_en:'Siegfried', rarity:5, grade:83, icon:'eiyuu_jikuhurito.png', skills:['怪力乱神','リベリオン','武道の素養'], skill4:['勝利の息吹','ティタノマキア','チャージ','不屈の闘志','衝撃無効'], skill5:['','千発千中','スクンダオート','刹那五月雨撃ち','呪殺耐性'], elements:['dr','','','','','',''], type:'attack'},
            { name:'ジャンヌ・ダルク', name_tw:'貞德', name_en:"Jeanne d'Arc", rarity:4, grade:78, icon:'eiyuu_jannu.png', skills:['回復ブースタ','天罰','オルレアンの祈り'], skill4:['勝利の息吹','ジャッジメント','静寂の祈り','魔封無効','火炎反射'], skill5:['','精神漏出','メディラマ','煉獄','ザンマ'], elements:['','wk','rs','rs','rs','',''], type:'heal'}
        ]
    },
    {
        name:'怪異',
        name_tw:'怪異',
        name_en:'Rumor',
        highlight:false,
        formulas:[],
        devils:[
            { name:'カシマレイコ', name_tw:'鹿島零子', name_en:'Reiko Kashima', rarity:3, grade:42, icon:'kaii_kasimareiko.png', skills:['ムド','突撃','次はお前だ'], skill4:['呪い無効','マハムド','スクンダ','狂戦士','火炎耐性'], skill5:['','','','',''], elements:['','wk','','','','wk','dr'], type:'attack'},
            { name:'かみおとこ', name_tw:'啃咬魔', name_en:'Kamiotoko', rarity:2, grade:25, icon:'kaii_kamiotoko.png', skills:['ムドオン','狂い咲き','痺れかみつき'], skill4:['雄叫び','丸かじり','ディスコード','初段の強運','衝撃無効'], skill5:['','暴れまくり','ディア','マハンマ','コロシの愉悦'], elements:['','','','','','wk','rp'], type:'support'}
        ]
    },
    {
        name:'珍獣',
        name_tw:'珍獸',
        name_en:'UMA',
        formulas:[],
        devils:[
            { name:'イナバシロウサギ', name_tw:'因幡白兔', name_en:'Hare of Inaba',rarity:3, grade:41, icon:'tinjyuu_inabasirousagi.png', skills:['デカジャ','メディア','ワナフーリ'], skill4:['リカーム','狂乱の剛爪','ディスコード','初段の猛速','火炎無効'], skill5:['','マハムド','マハンマ','メカースディ','メウィークディ'], elements:['','wk','','','','',''], type:'heal'},
            { name:'チュパカブラ', name_tw:'卓柏卡布拉', name_en:'Chupacabra',rarity:1, grade:15, icon:'tinjyuu_typakabura.png', skills:['マハザン','ステルス','ワナフーリ'], skill4:['スクカオート','吸魔','パララディ','地獄のマスク','電撃耐性'], skill5:['','マハムド','メディア','初段の恵体','野生の勘'], elements:['','','','wk','','',''], type:'attack'}
        ]
    },
    {
        name:'秘神',
        name_tw:'秘神',
        name_en:'Enigma',
        formulas:[],
        devils:[
            { name:'カーマ', name_tw:'伽摩', name_en:'Kama',rarity:4, grade:75, icon:'hisin_kama.png', skills:['スピードスター','デクンダ','魅了の神弓'], skill4:['空間殺法','刹那五月雨撃ち','静寂の祈り','スクカオート','火炎反射'], skill5:['','衝撃耐性','メポズムディ','毒針','タルンダ'], elements:['rs','wk','','','','rs',''], type:'support'},
            { name:'キンマモン', name_tw:'君真物', name_en:'Kinmamon',rarity:3, grade:55, icon:'hisin_kinmamon.png', skills:['メギド','バリア','マレビト'], skill4:['メギドラ','エナジードレイン','アムリタ','見切り','呪殺無効'], skill5:['','初段の恵体','毒床歩き','乱れ狂い','カースディ'], elements:['','nu','wk','','','rs','rs'], type:'support'},
            { name:'カンバリ', name_tw:'加牟波理', name_en:'Kanbari',rarity:2, grade:30, icon:'hisin_kanbari.png', skills:['暴れまくり','ハマオン','コウウン'], skill4:['メガトンプレス','マハンマ','メカースディ','勝利のチャクラ','火炎耐性'], skill5:['','','','',''], elements:['wk','','','','','rs','wk'], type:'attack'}
        ]
    },
    {
        name:'狂神',
        name_tw:'狂神',
        name_en:'Zealot',
        highlight:false,
        formulas:[],
        devils:[
            { name:'アティス', name_tw:'阿提斯', name_en:'Attis',rarity:4, grade:65, icon:'kyousin_ateisu.png', skills:['不屈の闘志','リカームドラ','乱・かすみ斬り'], skill4:['勝利の息吹','マハブフダイン','ディアラマ','魅了無効','氷結無効'], skill5:['','二段の猛速','マハラギオン','毒床歩き','メチャームディ'], elements:['rs','','','','','',''], type:'attack'},
            { name:'ディオニュソス', name_tw:'戴奧尼索斯', name_en:'Dionysus',rarity:4, grade:64, icon:'kyousin_deioniyusosu.png', skills:['追い打ち','奈落のマスク','狂乱の陶酔'], skill4:['二段の強運','メギドラ','マハデゾレトオン','二分の活泉','氷結耐性'], skill5:['','','','',''], elements:['','nu','wk','nu','','',''], type:'support'}
        ]
    },
    {
        name:'威靈',
        name_tw:'威靈',
        name_en:'Entity',
        formulas:[],
        devils:[
            { name:'アリラト', name_tw:'阿利拉特', name_en:'Alilat',rarity:5, grade:85, icon:'irei_arirato.png', skills:['メギドラ','奈落のマスク','貫反の霊圧'], skill4:['ディアラハン','ソウルドレイン','メディラマ','二分の魔脈','物理無効'], skill5:['','','','',''], elements:['rs','','','','','rs','rs'], type:'support'}
        ]
    },
    {
        name:'死神',
        name_tw:'死神',
        name_en:'Reaper',
        highlight:true,
        formulas:[],
        devils:[
            { name:'モト', name_tw:'莫特', name_en:'Mot',rarity:5, grade:91, icon:'sinigami_moto.png', skills:['メギドラオン','マハムドダイン','死が奏であう劇場'], skill4:['二分の魔脈','デスタッチ','ジャッジメント','三分の活泉','物理無効'], skill5:['','三段の賢魔','ラクカオート','不屈の闘志','電撃耐性'], elements:['rs','rs','','wk','rp','','rp'], type:'attack'},
            { name:'イシュタム', name_tw:'伊休妲', name_en:'Ixtab',rarity:5, grade:84, icon:'sinigami_isyutamu.png', skills:['マハムドオン','ブフダイン','ヤシュチェ'], skill4:['虚弱無効','ヘルズアイ','マハシバブオン','狂戦士','破魔無効'], skill5:['','暗殺者','狂い咲き','ラクンダオート','マハブフダイン'], elements:['','','','','','wk','rp'], type:'support'},
            { name:'ネルガル', name_tw:'內爾伽勒', name_en:'Nergal',rarity:5, grade:82, icon:'sinigami_nerugaru.png', skills:['怪力乱神','メスラムタエア','バビロニアの疫病'], skill4:['三段の剛力','冥界破','毒針','タルカオート','破魔無効'], skill5:['','ミナゴロシの愉悦','スクカオート','三段の剛力','氷結耐性'], elements:['','rs','wk','','','rs','rp'], type:'support'},
            { name:'オルクス', name_tw:'歐卡斯', name_en:'Orcus',rarity:5, grade:80, icon:'sinigami_orukusu.png', skills:['雄叫び','冥府の理','ヘルズゲート'], skill4:['テトラカーン','マハムドオン','宵闇の調べ','テトラカシフト','物理無効'], skill5:['','タルンダオート','緊縛無効','ヘルズアイ','三段の恵体'], elements:['rs','wk','rs','wk','rs','','nu'], type:'support'},
            { name:'ペルセポネー', name_tw:'珀耳塞福涅', name_en:'Persephone',rarity:4, grade:72, icon:'sinigami_perusepone.png', skills:['ブフダイン','マハムドオン','ザクロの制約'], skill4:['祟り','エナジードレイン','常世の祈り','緊縛無効','呪殺吸収'], skill5:['','溶解ブレス','二分の活泉','雄叫び','電撃耐性'], elements:['','','nu','wk','','','nu'], type:'support'},
            { name:'チェルノボグ', name_tw:'切爾諾伯格', name_en:'Chernobog',rarity:4, grade:64, icon:'sinigami_tyerunobogu.png', skills:['毒追撃','冥界破','黒い夜の霧'], skill4:['混沌の海','暗夜剣','アウトブレイク','ミナゴロシの愉悦','火炎無効'], skill5:['','魔封追撃','毒床渡り','五月雨斬り','破魔耐性'], elements:['','','','','','wk','nu'], type:'attack'},
            { name:'ヘル', name_tw:'赫爾', name_en:'Hel',rarity:4, grade:60, icon:'sinigami_heru.png', skills:['マハブフーラ','マハムド','ヘルヘイムの叫び'], skill4:['アイスブレス','ブフダイン','ディスタブ','氷結ブースタ','氷結反射'], skill5:['','無慈悲な一撃','不屈の闘志','ブフダイン','火炎耐性'], elements:['','wk','nu','','','','nu'], type:'attack'}
        ]
    },
    {
        name:'猛将',
        name_tw:'猛將',
        name_en:'General',
        highlight:true,
        formulas:[],
        devils:[
            { name:'マサカド', name_tw:'平將門', name_en:'Masakato',rarity:5, grade:98, icon:'mousyou_masakado.png', skills:['空間殺法','猛将の逆鱗','奥義一閃'], skill4:['不屈の闘志','刹那五月雨撃ち','暴飲暴食','物理ハイブースタ','物理吸収'], skill5:['','ラクンダオート','スクンダオート','タルカオート','ラクカオート'], elements:['nu','','','','','rs','dr'], type:'attack'}
        ]
    },
    {
        name:'屍鬼',
        name_tw:'屍鬼',
        name_en:'Undead',
        highlight:true,
        formulas:[],
        devils:[
            { name:'マンイーター', name_tw:'辣妹食人鬼', name_en:'Man Eater',rarity:4, grade:60, icon:'siki_manita.png', skills:['セクシーダンス','丸かじり','猟奇的な愛情'], skill4:['デスタッチ','血管断ち','バインドクロー','狂い咲き','電撃反射'], skill5:['','狂戦士','緊縛追撃','猛反撃','破魔耐性'], elements:['','','','rs','','wk','rp'], type:'support'},
            { name:'ボディコニアン', name_tw:'短裙辣妹殭屍', name_en:'Bodyconian',rarity:3, grade:40, icon:'siki_bodeikonian.png', skills:['乱れ狂い','セクシーダンス','ナイトフィーバー'], skill4:['二段の強運','甘噛み','挑発','寸分の見切り','破魔耐性'], skill5:['','百発百中','リディア','野生の勘','自然治癒'], elements:['','wk','','','','wk','rs'], type:'support'}
        ]
    },
    {
        name:'邪神(活動)',
        name_tw:'邪神(活動)',
        name_en:'Vile(Event)',
        formulas:[],
        highlight:true,
        devils:[
            {  name:'ミシャグジさま',   name_tw:'御社宮司神', name_en:'Mishaguji', rarity:4, grade:65, icon:'jyasin_misyagujisama.png', skills:["マハジオンガ","電撃ブースタ","穴巣始"], skill4:['祟り','放電',"コンセントレイト","野獣の勘","電撃吸収"], skill5:['',"テトラジャ","二分の魔脈","スピードスター","衝撃耐性"],elements:['','','','nu','wk','wk','nu'], type:'attack'            }
        ]
    }
];

const skill_stable = [
    {
        name:"物理",
        name_tw:"物理",
        name_en:"Physical",
        skills:[
            //物理
            {"name":"スラッシュ","name_tw":"斬擊","desc":"敵単体に物理属性の打撃型ダメージを威力120で与える。","name_en":"Cleave","desc_en":"Inflicts Phys (Physical) damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"物理"},
            {"name":"絶命剣","name_tw":"絕命劍","desc":"敵単体に物理属性の打撃型ダメージを威力140で与える。","name_en":"Fatal Sword","desc_en":"Inflicts Phys (Physical) damage with 140 power on a Single Enemy.","mp":5,"point":6,"element":"物理"},
            {"name":"怪力乱神","name_tw":"怪力亂神","desc":"敵単体に物理属性の打撃型ダメージを威力160で与える。","name_en":"Berserker God","desc_en":"Inflicts Phys (Physical) damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"物理"},
            {"name":"メガトンレイド","name_tw":"百萬噸襲擊","desc":"敵単体に物理属性の打撃型ダメージを威力180で与える。","name_en":"Megaton Raid","desc_en":"Inflicts Phys (Physical) damage with 180 power on a Single Enemy.","mp":7,"point":"12","element":"物理"},
            {"name":"ゴッドハンド","name_tw":"神之手","desc":"敵単体に物理属性の打撃型ダメージを威力200で与える。","name_en":"God's Hand","desc_en":"Inflicts Phys (Physical) damage with 200 power on a Single Enemy.","mp":8,"point":"15","element":"物理"},
            {"name":"なぎ払い","name_tw":"橫斬","desc":"敵全体に物理属性の打撃型ダメージを威力80で与える。","name_en":"Mow Down","desc_en":"Inflicts Phys (Physical) damage with 80 power on All Enemies.","mp":4,"point":2,"element":"物理"},
            {"name":"金剛発破","name_tw":"金剛發破","desc":"敵全体に物理属性の打撃型ダメージを威力100で与える。","name_en":"Herculean Strike","desc_en":"Inflicts Phys (Physical) damage with 100 power on All Enemies.","mp":5,"point":4,"element":"物理"},
            {"name":"冥界破","name_tw":"冥界破","desc":"敵全体に物理属性の打撃型ダメージを威力120で与える。","name_en":"Hades Blast","desc_en":"Inflicts Phys (Physical) damage with 120 power on All Enemies.","mp":6,"point":6,"element":"物理"},
            {"name":"空間殺法","name_tw":"空間殺法","desc":"敵全体に物理属性の打撃型ダメージを威力140で与える。","name_en":"Vorpal Blade","desc_en":"Inflicts Phys (Physical) damage with 140 power on All Enemies.","mp":7,"point":8,"element":"物理"},
            {"name":"ギガントマキア","name_tw":"巨人之戰","desc":"敵全体に物理属性の打撃型ダメージを威力160で与える。","name_en":"Gigantomachia","desc_en":"Inflicts Phys (Physical) damage with 160 power on All Enemies.","mp":8,"point":"10","element":"物理"},
            {"name":"突撃","name_tw":"突擊","desc":"敵単体にクリティカル率30%の物理属性の打撃型ダメージを威力115で与える。","name_en":"Lunge","desc_en":"Inflicts Phys (Physical) damage with 30% crit rate and 115 power on a Single Enemy.","mp":4,"point":2,"element":"物理"},
            {"name":"鬼神楽","name_tw":"鬼神樂","desc":"敵単体にクリティカル率30%の物理属性の打撃型ダメージを威力130で与える。","name_en":"Oni-Kagura","desc_en":"Inflicts Phys (Physical) damage with 30% crit rate and 130 power on a Single Enemy.","mp":5,"point":5,"element":"物理"},
            {"name":"モータルジハード","name_tw":"絕命鬥爭","desc":"敵単体にクリティカル率30%の物理属性の打撃型ダメージを威力145で与える。","name_en":"Mortal Jihad","desc_en":"Inflicts Phys (Physical) damage with 30% crit rate and 145 power on a Single Enemy.","mp":6,"point":7,"element":"物理"},
            {"name":"ウアス","name_tw":"力之權杖","desc":"敵単体にクリティカル率50％の物理属性の打撃型ダメージを威力160で与え、そのダメージの40%分、自身を回復する。","name_en":"Ouas","desc_en":"Inflicts Phys (Physical) damage with 50% crit rate and 160 power on a Single Enemy, while healing caster 40% of damage dealt.","mp":6,"point":null,"element":"物理"},
            {"name":"ヒートウェイブ","name_tw":"灼熱波浪","desc":"敵全体にクリティカル率30%の物理属性の打撃型ダメージを威力70で与える。","name_en":"Heat Wave","desc_en":"Inflicts Phys (Physical) damage with 30% crit rate and 70 power on All Enemies.","mp":5,"point":2,"element":"物理"},
            {"name":"メガトンプレス","name_tw":"百萬噸重壓","desc":"敵全体にクリティカル率30%の物理属性の打撃型ダメージを威力90で与える。","name_en":"Megaton Press","desc_en":"Inflicts Phys (Physical) damage with 30% crit rate and 90 power on All Enemies.","mp":6,"point":4,"element":"物理"},
            {"name":"ティタノマキア","name_tw":"泰坦之戰","desc":"敵全体にクリティカル率30%の物理属性の打撃型ダメージを威力110で与える。","name_en":"Titanomachia","desc_en":"Inflicts Phys (Physical) damage with 30% crit rate and 110 power on All Enemies.","mp":7,"point":6,"element":"物理"},
            {"name":"暴れまくり","name_tw":"橫衝直撞","desc":"ランダムな敵に２～３回、物理属性の打撃型ダメージを威力45で与える。","name_en":"Rampage","desc_en":"Inflicts Phys (Physical) damage 2 to 3 times with 45 power on Random Enemy/(ies).","mp":3,"point":3,"element":"物理"},
            {"name":"デスバウンド","name_tw":"神威之擊","desc":"ランダムな敵に２～３回、物理属性の打撃型ダメージを威力55で与える。","name_en":"Darkbound","desc_en":"Inflicts Phys (Physical) damage 2 to 3 times with 55 power on Random Enemy/(ies).","mp":4,"point":5,"element":"物理"},
            {"name":"狂乱の剛爪","name_tw":"狂亂硬爪","desc":"ランダムな敵に２～３回、物理属性の打撃型ダメージを威力65で与える。","name_en":"Madness Nails","desc_en":"Inflicts Phys (Physical) damage 2 to 3 times with 65 power on Random Enemy/(ies).","mp":5,"point":7,"element":"物理"},
            {"name":"地獄の獰爪","name_tw":"地獄兇爪","desc":"ランダムな敵に3回、クリティカル率30％の物理属性の打撃型ダメージを威力65で与える。","name_en":"Hell Claw","desc_en":"Inflicts Phys (Physical) damage 3 times with 30% crit rate and 65 power on Random Enemy/(ies).","mp":5,"point":7,"element":"物理"},
            {"name":"虚空爪激","name_tw":"虛空爪激","desc":"ランダムな敵に２～３回、物理属性の打撃型ダメージを威力75で与える。","name_en":"Nihil Claw","desc_en":"Inflicts Phys (Physical) damage 2 to 3 times with 75 power on Random Enemy/(ies).","mp":6,"point":9,"element":"物理"},
            {"name":"五月雨斬り","name_tw":"五月雨斬","desc":"ランダムな敵に２～５回、物理属性の打撃型ダメージを威力50で与える。","name_en":"Tempest Slash","desc_en":"Inflicts Phys (Physical) damage 2 to 5 times with 50 power on Random Enemy/(ies).","mp":5,"point":7,"element":"物理"},
            {"name":"刹那五月雨撃ち","name_tw":"剎那五月雨擊","desc":"ランダムな敵に２～５回、物理属性の打撃型ダメージを威力65で与える。","name_en":"Hurricane Slash","desc_en":"Inflicts Phys (Physical) damage 2 to 5 times with 65 power on Random Enemy/(ies).","mp":7,"point":9,"element":"物理"},
            {"name":"毒針","name_tw":"毒針","desc":"敵単体に物理属性の打撃型ダメージを威力120で与え、基礎確率40%で毒状態にする。","name_en":"Toxic Sting","desc_en":"Inflicts Phys (Physical) damage with 120 power on a Single Enemy with 40% chance to inflict Poison.","mp":5,"point":6,"element":"物理"},
            {"name":"バインドクロー","name_tw":"束縛爪擊","desc":"敵単体に物理属性の打撃型ダメージを威力120で与え、基礎確率40%で緊縛状態にする。","name_en":"Binding Claw","desc_en":"Inflicts Phys (Physical) damage with 120 power on a Single Enemy with 40% chance to inflict Bind.","mp":5,"point":6,"element":"物理"},
            {"name":"暗夜剣","name_tw":"暗夜劍","desc":"敵単体に物理属性の打撃型ダメージを威力120で与え、基礎確率40%で魔封状態にする。","name_en":"Dark Sword","desc_en":"Inflicts Phys (Physical) damage with 120 power on a Single Enemy with 40% chance to inflict Mute.","mp":5,"point":6,"element":"物理"},
            {"name":"甘噛み","name_tw":"甜蜜輕咬","desc":"敵単体に物理属性の打撃型ダメージを威力120で与え、基礎確率40%で魅了状態にする。","name_en":"Sweet Bite","desc_en":"Inflicts Phys (Physical) damage with 120 power on a Single Enemy with 40% chance to inflicts Charm.","mp":5,"point":6,"element":"物理"},
            {"name":"丸かじり","name_tw":"大快朵頤","desc":"敵単体に物理属性の打撃型ダメージを威力120で与え、そのダメージの25%分、自身を回復する。","name_en":"Eat Whole","desc_en":"Inflicts Phys (Physical) damage with 120 power on a Single Enemy, while healing caster 25% of damage dealt.","mp":5,"point":6,"element":"物理"},
            {"name":"暴飲暴食","name_tw":"暴飲暴食","desc":"敵単体に物理属性の打撃型ダメージを威力140で与え、そのダメージの40%分、自身を回復する。","name_en":"Binge Eating","desc_en":"Inflicts Phys (Physical) damage with 140 power on a Single Enemy, while healing caster 40% of damage dealt.","mp":6,"point":8,"element":"物理"},
            {"name":"捨て身の一撃","name_tw":"捨身一擊","desc":"自身のＨＰを10%消費して、敵単体に物理属性の打撃型ダメージを威力170で与える。","name_en":"Power Hit","desc_en":"Use 10% of own HP to inflict Phys (Physical) damage with 170 power on a Single Enemy.","mp":7,"point":6,"element":"物理"},
            {"name":"八艘飛び","name_tw":"八艘跳躍","desc":"ランダムな敵に8回、物理属性の打撃型ダメージを威力35で与える。このスキルによるダメージは物理貫通を得る。","name_en":"Hassou Tobi","desc_en":"Inflicts Phys (Physical) damage 8 times with 35 power on Random Enemy/(ies).","mp":7,"point":null,"element":"物理"},
            {"name":"乱・かすみ斬り","name_tw":"亂・霞霧斬擊","desc":"敵に3～5回、物理属性の打撃型ダメージを威力50で与える","name_en":"Mist Slash","desc_en":"Inflicts Phys (Physical) damage 3 to 5 times with 50 power on Random Enemy/(ies).","mp":6,"point":null,"element":"物理"},
            {"name":"ゲイボルグ","name_tw":"千棘魔槍","desc":"ランダムな敵に４～６回、物理属性の打撃型ダメージを威力50で与える。","name_en":"Gae Bolg","desc_en":"Inflicts Phys (Physical) damage 4 to 6 times with 50 power on Random Enemy/(ies).","mp":7,"point":null,"element":"物理"},
            {"name":"地獄突き","name_tw":"地域刺擊","desc":"ランダムな敵に４回、物理属性の打撃型ダメージを威力35で与え、基礎確率35％で魅了状態にする。","name_en":"Hell Thrust","desc_en":"Inflicts Phys (Physical) damage with 50 power on Random Enemy/(ies) 4 times with a 35% chance to inflict Charm.","mp":7,"point":null,"element":"物理"},
            {"name":"痺れかみつき","name_tw":"麻痺咬痕","desc":"敵単体に物理属性の打撃型ダメージを威力160で与え、基礎確率35％で緊縛状態にする。","name_en":"Paralyzing Bite","desc_en":"Inflicts Phys (Physical) damage with 160 power on a Single Enemy with 35% chance to inflict Poison.","mp":5,"point":null,"element":"物理"},
            {"name":"グングニル","name_tw":"永恆之槍","desc":"敵全体にクリティカル率30％の物理属性の打撃型ダメージを威力145で与える。","name_en":"Gungnir","desc_en":"Inflicts Phys (Physical) damage with 30% crit rate and 145 power on All Enemies. (3 uses)","mp":7,"point":null,"element":"物理"},
            {"name":"応龍撃破","name_tw":"應龍擊破","desc":"敵全体にクリティカル率50%の物理属性の打撃型ダメージを威力150で与える。","name_en":"Yinlong Killer","desc_en":"Inflicts Phys (Physical) damage with 50% crit rate and 150 power on All Enemies.","mp":8,"point":null,"element":"物理"},
            {"name":"血管断ち","name_tw":"血管斷擊","desc":"敵単体に物理属性の打撃型ダメージを威力120で与え、MPを2失わせる。","name_en":"Bleeder","desc_en":"Inflicts Physical damage on a single enemy with 120 power and reduces MP by 2.","mp":6,"point":null,"element":"物理"},
            {"name":"奥義一閃","name_tw":"奥義一閃","desc":"敵単体にクリティカル率50%の物理属性の打撃型ダメージを威力200で与え、100%の確率で即死させる。","name_en":"Occult Flash","desc_en":"Inflicts Phys (Physical) damage with 50% crit rate on a single enemy, with 100% chance to inflict Mortal.","mp":8,"point":null,"element":"物理"}
        ]
    },
    {
        name:"火炎",
        name_tw:"火炎",
        name_en:"Fire",
        skills:[
            //火
            {"name":"アギ","name_tw":"亞基","desc":"敵単体に火炎属性の魔法型ダメージを威力120で与える。","name_en":"Agi","desc_en":"Inflicts Fire (Magic) damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"火炎"},
            {"name":"アギラオ","name_tw":"亞基拉歐","desc":"敵単体に火炎属性の魔法型ダメージを威力140で与える。","name_en":"Agilao","desc_en":"Inflicts Fire (Magic) damage with 140 power on a Single Enemy.","mp":5,"point":6,"element":"火炎"},
            {"name":"アギダイン","name_tw":"亞基達因","desc":"敵単体に火炎属性の魔法型ダメージを威力160で与える。","name_en":"Agidyne","desc_en":"Inflicts Fire (Magic) damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"火炎"},
            {"name":"トリスアギオン","name_tw":"多利斯亞基翁","desc":"敵単体に火炎属性の魔法型ダメージを威力180で与える。","name_en":"Trisagion","desc_en":"Inflicts Fire (Magic) damage with 180 power on a Single Enemy.","mp":7,"point":12,"element":"火炎"},
            {"name":"マハラギ","name_tw":"瑪哈拉基","desc":"敵全体に火炎属性の魔法型ダメージを威力80で与える。","name_en":"Maragi","desc_en":"Inflicts Fire (Magic) damage with 80 power on All Enemies.","mp":5,"point":2,"element":"火炎"},
            {"name":"マハラギオン","name_tw":"瑪哈拉基翁","desc":"敵全体に火炎属性の魔法型ダメージを威力100で与える。","name_en":"Maragion","desc_en":"Inflicts Fire (Magic) damage with 100 power on All Enemies.","mp":6,"point":6,"element":"火炎"},
            {"name":"マハラギダイン","name_tw":"瑪哈亞吉達因","desc":"敵全体に火炎属性の魔法型ダメージを威力120で与える。","name_en":"Maragidyne","desc_en":"Inflicts Fire (Magic) damage with 120 power on All Enemies.","mp":7,"point":9,"element":"火炎"},
            {"name":"ファイアブレス","name_tw":"火焰吐息","desc":"ランダムな敵に２～４回、火炎属性の魔法型ダメージを威力45で与える。","name_en":"Fire Breath","desc_en":"Inflicts Fire (Magic) damage 2 to 4 times with 45 power on Random Enemy/ies.","mp":4,"point":7,"element":"火炎"},
            {"name":"地獄の業火","name_tw":"地獄業火","desc":"ランダムな敵に２～４回、火炎属性の魔法型ダメージを威力55で与える。","name_en":"Hellfire","desc_en":"Inflicts Fire (Magic) damage 2 to 4 times with 55 power on Random Enemy/ies.","mp":5,"point":"10","element":"火炎"},
            {"name":"ラグナロク","name_tw":"諸神的黃昏","desc":"敵単体に火炎属性の魔法型ダメージを威力215で与える。","name_en":"Ragnarok","desc_en":"Inflicts Fire (Magic) damage with 215 power on a Single Enemy. Adds 20% damage to this skill based on your Phys ATK status.","mp":7,"point":null,"element":"火炎"}
        ]
    },
    {
        name:"氷結",
        name_tw:"冰凍",
        name_en:"Ice",
        skills:[
            //冰
            {"name":"ブフ","name_tw":"布芙","desc":"敵単体に氷結属性の魔法型ダメージを威力120で与える。","name_en":"Bufu","desc_en":"Inflicts Ice (Magic) damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"氷結"},
            {"name":"ブフーラ","name_tw":"布芙拉","desc":"敵単体に氷結属性の魔法型ダメージを威力140で与える。","name_en":"Bufula","desc_en":"Inflicts Ice (Magic) damage with 140 power on a Single Enemy.","mp":"5","point":"6","element":"氷結"},
            {"name":"ブフダイン","name_tw":"布芙達因","desc":"敵単体に氷結属性の魔法型ダメージを威力160で与える。","name_en":"Bufudyne","desc_en":"Inflicts Ice (Magic) damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"氷結"},
            {"name":"アイスエイジ","name_tw":"大冰河時期","desc":"敵単体に氷結属性の魔法型ダメージを威力180で与える。","name_en":"Ice Age","desc_en":"Inflicts Ice (Magic) damage with 180 power on a Single Enemy.","mp":7,"point":12,"element":"氷結"},
            {"name":"マハブフ","name_tw":"瑪哈布芙","desc":"敵全体に氷結属性の魔法型ダメージを威力80で与える。","name_en":"Mabufu","desc_en":"Inflicts Ice (Magic) damage with 80 power on All Enemies.","mp":5,"point":2,"element":"氷結"},
            {"name":"マハブフーラ","name_tw":"瑪哈布芙拉","desc":"敵全体に氷結属性の魔法型ダメージを威力100で与える。","name_en":"Mabufula","desc_en":"Inflicts Ice (Magic) damage with 100 power on All Enemies.","mp":6,"point":6,"element":"氷結"},
            {"name":"マハブフダイン","name_tw":"瑪哈布芙達因","desc":"敵全体に氷結属性の魔法型ダメージを威力120で与える。","name_en":"Mabufudyne","desc_en":"Inflicts Ice (Magic) damage with 120 power on All Enemies.","mp":7,"point":9,"element":"氷結"},
            {"name":"アイスブレス","name_tw":"極寒吐息","desc":"ランダムな敵に２〜４回、氷結属性の魔法型ダメージを威力45で与える。","name_en":"Ice Breath","desc_en":"Inflicts Ice (Magic) damage 2 to 4 times with 45 power on Random Enemy/ies.","mp":4,"point":7,"element":"氷結"},
            {"name":"絶対零度","name_tw":"絕對零度","desc":"ランダムな敵に２～４回、氷結属性の魔法型ダメージを威力55で与える。","name_en":"Glacial Blast","desc_en":"Inflicts Ice (Magic) damage 2 to 4 times with 55 power on Random Enemy/ies.","mp":5,"point":10,"element":"氷結"},
            {"name":"大冷界","name_tw":"大冷界","desc":"敵全体に氷結属性の魔法型ダメージを威力130で与え、3ターンの間、敵全体の防御力を20％減少させる。","name_en":"Cold World","desc_en":"Inflicts Ice (Magic) damage with 130 power on All Enemies and reduces enemy's DEF 20% for 3 turns.","mp":7,"point":null,"element":"氷結"}
        ]
    },
    {
        name:"電撃",
        name_tw:"電擊",
        name_en:"Elec",
        skills:[
            //雷
            {"name":"ジオ","name_tw":"吉歐","desc":"敵単体に電撃属性の魔法型ダメージを威力120で与える。","name_en":"Zio","desc_en":"Inflicts Elec (Magic) damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"電撃"},
            {"name":"ジオンガ","name_tw":"吉歐加","desc":"敵単体に電撃属性の魔法型ダメージを威力140で与える。","name_en":"Zionga","desc_en":"Inflicts Elec (Magic) damage with 140 power on a Single Enemy.","mp":5,"point":6,"element":"電撃"},
            {"name":"ジオダイン","name_tw":"吉歐達因","desc":"敵単体に電撃属性の魔法型ダメージを威力160で与える。","name_en":"Ziodyne","desc_en":"Inflicts Elec (Magic) damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"電撃"},
            {"name":"真理の雷","name_tw":"真理之雷","desc":"敵単体に電撃属性の魔法型ダメージを威力180で与える。","name_en":"Thunder Reign","desc_en":"Inflicts Elec (Magic) damage with 180 power on a Single Enemy.","mp":"7","point":12,"element":"電撃"},
            {"name":"マハジオ","name_tw":"瑪哈吉歐","desc":"敵全体に電撃属性の魔法型ダメージを威力80で与える。","name_en":"Mazio","desc_en":"Inflicts Elec (Magic) damage with 80 power on All Enemies.","mp":5,"point":2,"element":"電撃"},
            {"name":"マハジオンガ","name_tw":"瑪哈吉歐加","desc":"敵全体に電撃属性の魔法型ダメージを威力100で与える。","name_en":"Mazionga","desc_en":"Inflicts Elec (Magic) damage with 100 power on All Enemies.","mp":6,"point":6,"element":"電撃"},
            {"name":"マハジオダイン","name_tw":"瑪哈吉歐達因","desc":"敵全体に電撃属性の魔法型ダメージを威力120で与える。","name_en":"Maziodyne","desc_en":"Inflicts Elec (Magic) damage with 120 power on All Enemies.","mp":7,"point":9,"element":"電撃"},
            {"name":"放電","name_tw":"放電","desc":"ランダムな敵に２〜４回、電撃属性の魔法型ダメージを威力45で与える。","name_en":"Shock","desc_en":"Inflicts Elec (Magic) damage 2 to 4 times with 45 power on Random Enemy/ies.","mp":4,"point":7,"element":"電撃"},
            {"name":"ショックウェーブ","name_tw":"衝擊波","desc":"ランダムな敵に２〜４回、電撃属性の魔法型ダメージを威力55で与える。","name_en":"Bolt Storm","desc_en":"Inflicts Elec (Magic) damage 2 to 4 times with 55 power on Random Enemy/ies.","mp":5,"point":10,"element":"電撃"},
            {"name":"ミョルニル","name_tw":"雷神之槌","desc":"ランダムな敵に３～５回、電撃属性の魔法型ダメージを威力60で与える。","name_en":"Mjolnir","desc_en":"Inflicts Elec (Magic) damage 3 to 5 times with 60 power on Random Enemy/ies.","mp":7,"point":null,"element":"電撃"}
        ]
    },
    {
        name:"衝撃",
        name_tw:"衝擊",
        name_en:"Force",
        skills:[
            //衝
            {"name":"ザン","name_tw":"颯","desc":"敵単体に衝撃属性の魔法型ダメージを威力120で与える。","name_en":"Zan","desc_en":"Inflicts Force (Magic) damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"衝撃"},
            {"name":"ザンマ","name_tw":"颯瑪","desc":"敵単体に衝撃属性の魔法型ダメージを威力140で与える。","name_en":"Zanma","desc_en":"Inflicts Force (Magic) damage with 140 power on a Single Enemy.","mp":5,"point":6,"element":"衝撃"},
            {"name":"ザンダイン","name_tw":"颯達因","desc":"敵単体に衝撃属性の魔法型ダメージを威力160で与える。","name_en":"Zandyne","desc_en":"Inflicts Force (Magic) damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"衝撃"},
            {"name":"殺風激","name_tw":"殺風激","desc":"敵単体に衝撃属性の魔法型ダメージを威力180で与える。","name_en":"Killing Wind","desc_en":"Inflicts Force (Magic) damage with 180 power on a Single Enemy.","mp":7,"point":12,"element":"衝撃"},
            {"name":"マハザン","name_tw":"瑪哈颯","desc":"敵全体に衝撃属性の魔法型ダメージを威力80で与える。","name_en":"Mazan","desc_en":"Inflicts Force (Magic) damage with 80 power on All Enemies.","mp":5,"point":2,"element":"衝撃"},
            {"name":"マハザンマ","name_tw":"瑪哈颯瑪","desc":"敵全体に衝撃属性の魔法型ダメージを威力100で与える。","name_en":"Mazanma","desc_en":"Inflicts Force (Magic) damage with 100 power on All Enemies.","mp":6,"point":6,"element":"衝撃"},
            {"name":"マハザンダイン","name_tw":"瑪哈颯達因","desc":"敵全体に衝撃属性の魔法型ダメージを威力120で与える。","name_en":"Mazandyne","desc_en":"Inflicts Force (Magic) damage with 120 power on All Enemies.","mp":7,"point":9,"element":"衝撃"},
            {"name":"ウィンドブレス","name_tw":"狂風吐息","desc":"ランダムな敵に２～４回、衝撃属性の魔法型ダメージを威力45で与える。","name_en":"Wind Breath","desc_en":"Inflicts Force (Magic) damage 2 to 4 times with 45 power on Random Enemy/ies.","mp":4,"point":7,"element":"衝撃"},
            {"name":"ツイスター","name_tw":"龍捲風","desc":"ランダムな敵に２～４回、衝撃属性の魔法型ダメージを威力55で与える。","name_en":"Twister","desc_en":"Inflicts Force (Magic) damage 2 to 4 times with 55 power on Random Enemy/ies.","mp":5,"point":10,"element":"衝撃"},
            {"name":"天叢雲剣","name_tw":'',"desc":"敵単体に衝撃属性の魔法型ダメージを威力180で与え、3ターンの間、味方全体の攻撃力を20%増加させる。このスキルによるダメージは物理攻撃力に依存する。","name_en":"Kusanagi","desc_en":"Inflicts Force (Magic) damage with 180 power on a Single Enemy and increases own party's ATK 20% for 3 turns. The damage inflicted by this skill is dependent on Phys ATK.","mp":6,"point":null,"element":"衝撃"}
        ]
    },
    {
        name:"破魔",
        name_tw:"破魔",
        name_en:"Light",
        skills:[
            //破魔
            {"name":"ハマ","name_tw":"哈瑪","desc":"敵単体に破魔属性の魔法型ダメージを威力120で与える。","name_en":"Hama","desc_en":"Inflicts Magic Light damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"破魔"},
            {"name":"ハマオン","name_tw":"哈瑪翁","desc":"敵単体に破魔属性の魔法型ダメージを威力140で与える。","name_en":"Hamaon","desc_en":"Inflicts Magic Light damage with 140 power on a Single Enemy.","mp":5,"point":6,"element":"破魔"},
            {"name":"ハマダイン","name_tw":"哈瑪達因","desc":"敵単体に破魔属性の魔法型ダメージを威力160で与える。","name_en":"Hamadyne","desc_en":"Inflicts Magic Light damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"破魔"},
            {"name":"裁きの雷火","name_tw":"制裁雷火","desc":"敵単体に破魔属性の魔法型ダメージを威力180で与える。","name_en":"Thunderclap","desc_en":"Inflicts Magic Light damage with 180 power on a Single Enemy.","mp":7,"point":12,"element":"破魔"},
            {"name":"マハンマ","name_tw":"瑪哈瑪","desc":"敵全体に破魔属性の魔法型ダメージを威力80で与える。","name_en":"Mahama","desc_en":"Inflicts Magic Light damage with 80 power on All Enemies.","mp":5,"point":2,"element":"破魔"},
            {"name":"マハンマオン","name_tw":"瑪哈瑪翁","desc":"敵全体に破魔属性の魔法型ダメージを威力100で与える。","name_en":"Mahamaon","desc_en":"Inflicts Magic Light damage with 100 power on All Enemies.","mp":6,"point":6,"element":"破魔"},
            {"name":"マハンマダイン","name_tw":"瑪翰達因","desc":"敵全体に破魔属性の魔法型ダメージを威力120で与える。","name_en":"Mahamadyne","desc_en":"Inflicts Magic Light damage with 120 power on All Enemies.","mp":7,"point":9,"element":"破魔"},
            {"name":"審判の光","name_tw":"審判之光","desc":"敵ランダムに２～４回、破魔属性の魔法型ダメージを威力45で与える。","name_en":"Judgement Light","desc_en":"Inflicts Magic Light damage 2 to 4 times with 45 power on Random Enemy/ies.","mp":7,"point":7,"element":"破魔"},
            {"name":"天罰","name_tw":"天譴","name_en":"Holy Wrath","desc":"ランダムな敵に２～４回、破魔属性の魔法型ダメージを威力55で与える。","name_en":"Holy Wrath","desc_en":"Inflicts Magic Light damage 2 to 4 times with 55 power on Random Enemy/ies.","mp":5,"point":10,"element":"破魔"},
            {"name":"ゴッドアロー","name_tw":"神差箭矢","desc":"敵単体に破魔属性の魔法型ダメージを威力200で与え、50％の確率で死亡させる。","name_en":"God's Bow","desc_en":"Inflicts Magic Light damage with 200 power on a Single Enemy, with 50% kill rate.","mp":7,"point":null,"element":"破魔"},
            {"name":"憎悪の試練","name_tw":"憎惡的試煉","desc":"敵全体に破魔属性の魔法型ダメージを威力130で与え、3ターンの間、敵全体の攻撃力．防御力．回避と命中のいずれかを20%減少させる","name_en":"Trial of Hatred","desc_en":"Inflicts Magic Light damage with 130 power on All Enemies and increases ATK or DEF or EVA/ACC by 20% for 3 turns.%減少させる","mp":7,"point":null,"element":"破魔"},
            {"name":"魂の審判","name_tw":"斷罪刑魂","desc":"ランダムな敵に7回、破魔属性の魔法型ダメージを威力30で与える。","name_en":"Soul Judgement","desc_en":"Inflicts Magic Light damage 7 times with 30 power on Random Enemy/ies.","mp":5,"point":null,"element":"破魔"}
        ]
    },
    {
        name:"呪殺",
        name_tw:"咒殺",
        name_en:"Dark",
        skills:[
            //呪殺
            {"name":"ムド","name_tw":"姆多","desc":"敵単体に呪殺属性の魔法型ダメージを威力120で与える。","name_en":"Mudo","desc_en":"Inflicts Magic Dark damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"呪殺"},
            {"name":"ムドオン","name_tw":"姆多翁","desc":"敵単体に呪殺属性の魔法型ダメージを威力140で与える。","name_en":"Mudoon","desc_en":"Inflicts Magic Dark damage with 140 power on a Single Enemy.","mp":5,"point":6,"element":"呪殺"},
            {"name":"ムドダイン","name_tw":"姆多達因","desc":"敵単体に呪殺属性の魔法型ダメージを威力160で与える。","name_en":"Mudodyne","desc_en":"Inflicts Magic Dark damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"呪殺"},
            {"name":"ヘルズアイ","name_tw":"地獄之眼","desc":"敵単体に呪殺属性の魔法型ダメージを威力180で与える。","name_en":"Hell Gaze","desc_en":"Inflicts Magic Dark damage with 180 power on a Single Enemy.","mp":7,"point":12,"element":"呪殺"},
            {"name":"マハムド","name_tw":"瑪哈姆多","desc":"敵全体に呪殺属性の魔法型ダメージを威力80で与える。","name_en":"Mamudo","desc_en":"Inflicts Magic Dark damage with 80 power on All Enemies.","mp":5,"point":2,"element":"呪殺"},
            {"name":"マハムドオン","name_tw":"瑪哈姆多翁","desc":"敵全体に呪殺属性の魔法型ダメージを威力100で与える。","name_en":"Mamudoon","desc_en":"Inflicts Magic Dark damage with 100 power on All Enemies.","mp":6,"point":6,"element":"呪殺"},
            {"name":"マハムドダイン","name_tw":"瑪哈姆多達因","desc":"敵全体に呪殺属性の魔法型ダメージを威力120で与える。","name_en":"Mamudodyne","desc_en":"Inflicts Magic Dark damage with 120 power on All Enemies.","mp":7,"point":9,"element":"呪殺"},
            {"name":"イービルアイ","name_tw":"邪惡之眼","desc":"ランダムな敵に２～４回、呪殺属性の魔法型ダメージを威力45で与える。","name_en":"Evil Gaze","desc_en":"Inflicts Magic Dark damage 2 to 4 times with 45 power on Random Enemy/ies.","mp":4,"point":7,"element":"呪殺"},
            {"name":"煉獄","name_tw":"煉獄","desc":"ランダムな敵に２～４回、呪殺属性の魔法型ダメージを威力55で与える。","name_en":"Purgatory","desc_en":"Inflicts Magic Dark damage 2 to 4 times with 55 power on Random Enemy/ies.","mp":5,"point":10,"element":"呪殺"},
            {"name":"肉体の解放","name_tw":"肉體的解放","desc":"敵全体に呪殺属性の魔法型ダメージを威力110で与え、基礎確率35%で魅了状態にする。","name_en":"Allure","desc_en":"Inflicts Magic Dark damage with 110 power on All Enemies with 35% chance to Inflicts Charm.","mp":6,"point":null,"element":"呪殺"},
            {"name":"暴食の大罪","name_tw":"暴食重罪","desc":"敵全体に呪殺属性の魔法型ダメージを威力130で与え、そのダメージの50％分、自身を回復する。","name_en":"Gluttony","desc_en":"Inflicts Magic Dark damage with 130 power on All Enemies, while healing caster 50% of damage dealt.","mp":7,"point":null,"element":"呪殺"},
            {"name":"死んでくれる？","name_tw":"可以為我而死嗎？","desc":"敵単体を死亡させる。","name_en":"Die for Me!","desc_en":"Kills a Single Enemy. 1 Use.","mp":7,"point":null,"element":"呪殺"},
            {"name":"ごーとぅーへる","name_tw":"Go to Hell","desc":"敵全体に呪殺属性の魔法型ダメージを威力100で与え、基礎確率80%で呪い状態にする。このスキルによるダメージは呪殺貫通を得る。","name_en":"Go to Hell!","desc_en":"Inflicts Dark (Magic) damage with 100 power on All Enemies with a 80% chance to inflict Curse. This skill has the Dark Pierce effect.","mp":8,"point":null,"element":"呪殺"}
        ]
    },
    {
        name:"万能",
        name_tw:"萬能",
        name_en:"Almighty",
        skills:[
            //萬
            {"name":"吸血","name_tw":"吸血","desc":"敵単体に万能属性の魔法型ダメージを威力120で与え、そのダメージの25％分、自身を回復する。","name_en":"Life Drain","desc_en":"Inflicts Magic Almighty damage with 120 power on a Single Enemy, while healing caster 25% of damage dealt.","mp":5,"point":3,"element":"万能"},
            {"name":"デスタッチ","name_tw":"死亡之觸","desc":"敵単体に万能属性の魔法型ダメージを威力140で与え、そのダメージの40％分、自身を回復する。","name_en":"Deathtouch","desc_en":"Inflicts Magic Almighty damage with 140 power on a Single Enemy, while healing caster 40% of damage dealt.","mp":6,"point":6,"element":"万能"},
            {"name":"吸魔","name_tw":"吸魔","desc":"敵単体に万能属性の魔法型ダメージを威力100で与え、MPを１奪う。","name_en":"Spirit Drain","desc_en":"Inflicts Magic Almighty damage with 100 power on a Single Enemy and drains 1MP.","mp":6,"point":3,"element":"万能"},
            {"name":"エナジードレイン","name_tw":"能量抽取","desc":"敵単体に万能属性の魔法型ダメージを威力120で与え、そのダメージの25%分、自身を回復し、MPを1奪う。","name_en":"Energy Drain","desc_en":"Inflicts Magic Almighty damage with 100 power on a Single Enemy, while healing caster 25% of damage dealt and drains 1MP.","mp":7,"point":6,"element":"万能"},
            {"name":"神の悪意","name_tw":"神之惡意","desc":"敵単体に万能属性の魔法型ダメージを威力120で与え、基礎確率30％で毒、緊縛、魅了、魔封状態にする。","name_en":"God's Malice","desc_en":"Inflicts Almighty (Magic) damage with 120 power on a single enemy with 30% chance to inflict Poison, Bind, Mute and Charm.","mp":7,"point":null,"element":"万能"},
            {"name":"ソウルドレイン","name_tw":"靈魂抽取","desc":"敵単体に万能属性の魔法型ダメージを威力140で与え、そのダメージの40％分、自身を回復し、MPを１奪う。","name_en":"Soul Drain","desc_en":"Inflicts Magic Almighty damage with 140 power on a Single Enemy, while healing caster 40% of damage dealt and drains 1MP.","mp":8,"point":7,"element":"万能"},
            {"name":"メギド","name_tw":"米吉朵","desc":"敵全体に万能属性の魔法型ダメージを威力80で与える。","name_en":"Megido","desc_en":"Inflicts Magic Almighty damage with 80 power on All Enemies.","mp":6,"point":5,"element":"万能"},
            {"name":"メギドラ","name_tw":"米吉朵拉","desc":"敵全体に万能属性の魔法型ダメージを威力100で与える。","name_en":"Megidola","desc_en":"Inflicts Magic Almighty damage with 100 power on All Enemies.","mp":7,"point":8,"element":"万能"},
            {"name":"メギドラオン","name_tw":"米吉朵拉翁","desc":"敵全体に万能属性の魔法型ダメージを威力120で与える。","name_en":"Megidolaon","desc_en":"Inflicts Magic Almighty damage with 120 power on All Enemies.","mp":8,"point":"12","element":"万能"},
            {"name":"混沌の海","name_tw":"混沌之海","desc":"敵全体に万能属性の魔法型ダメージを威力100で与え、3ターンの間、敵全体の防御力を20%減少させる。","name_en":"Sea of Chaos","desc_en":"Inflicts Magic Almighty damage with 100 power on All Enemies and reduces enemy's DEF 20% for 3 turns.","mp":9,"point":null,"element":"万能"},
            {"name":"ジャッジメント","name_tw":"審判","desc":"敵全体に万能属性の魔法型ダメージを威力100で与え、3ターンの間、味方全体の攻撃力を20%増加させる。","name_en":"Judgement","desc_en":"Inflicts Magic Almighty damage with 100 power on All Enemies and increases own party's ATK 20% for 3 turns.","mp":9,"point":"12","element":"万能"},
            {"name":"精神漏出","name_tw":"精神漏出","desc":"敵単体に万能属性の魔法型ダメージを威力80で与え、MPを３失わせる。","name_en":"Mind Break","desc_en":"Inflicts Magic Almighty damage with 80 power on a Single Enemy and reduces MP by 3 MP.","mp":5,"point":6,"element":"万能"},
            {"name":"シナイの神火","name_tw":"西奈的神火","name_en":"Fire of Sinai","desc":"ランダムな敵に５回、万能属性の魔法型ダメージを威力45で与える。","name_en":"Fire of Sinai","desc_en":"Inflicts Magic Almighty damage 5 times with 45 power on Random Enemy/ies.","mp":7,"point":null,"element":"万能"},
            {"name":"プララヤ","name_tw":"大劫","desc":"敵全体に万能属性の魔法型ダメージを威力100で与え、魔法型ダメージ反射状態と物理型ダメージ反射状態を解除する。このスキルによるダメージは物理攻撃力に依存する。","name_en":"Pralaya","desc_en":"Inflicts Almighty (Magic) damage with 100 power on All Enemies while removing Repel Phys and Repel Mag. The damage inflicted by this skill is dependent on Phys ATK.","mp":8,"point":null,"element":"万能"},
            {"name":"アポカリプス","name_tw":"默示錄","desc":"敵全体に万能属性の魔法型ダメージを威力120で与え、基礎確率40％で魔封状態にする。","name_en":"Apocalypse","desc_en":"Inflicts Magic Almighty damage with 110 power on All Enemies with 30% chance to inflict Mute.","mp":8,"point":null,"element":"万能"},
            {"name":"明けの明星","name_tw":"拂曉明星","desc":"敵全体に万能属性の魔法型ダメージを威力135で与える。","name_en":"Morning Star","desc_en":"Inflicts Magic Almighty damage with 150 power on All Enemies. (3 uses)","mp":8,"point":null,"element":"万能"},
            {"name":"魅了の神弓","name_tw":"魅惑神弓","desc":"敵単体に万能属性の魔法型ダメージを威力190で与え、基礎確率45％で魅了状態にする。","name_en":"Divine Bows' Allure","desc_en":"Inflicts Magic Almighty damage with 190 power on a Single Enemy with 45% chance to inflict Charm.","mp":8,"point":null,"element":"万能"},
            {"name":"ブラフマーストラ","name_tw":"梵天法寶","desc":"敵全体に3回、万能属性の魔法型ダメージを威力40で与える。","name_en":"Brahma Sutra","desc_en":"Inflicts Almighty (Magic) damage 3 times with 40 power on All Enemies.","mp":7,"point":null,"element":"万能"},
            {"name":"バビロンの杯","name_tw":"巴比倫之杯","desc":"敵全体に万能属性の魔法型ダメージを威力100で与え、MPを1奪う。","name_en":"Babylon Goblet","desc_en":"Inflicts Almighty (Magic) damage with 100 power and drains 1 MP on All Enemies.","mp":8,"point":null,"element":"万能"},
            {"name":"悪魔の産声","name_tw":"惡魔啼聲","desc":"敵全体に万能属性の魔法型ダメージを威力100で与え、3ターンの間、敵全体の攻撃力を20％減少させる。","name_en":"Demon Birth Cry","desc_en":"Inflicts Almighty (Magic) damage with 100 power on All Enemies and reduces all enemy ATK by 20% for 3 turns.","mp":9,"point":null,"element":"万能"},
            {"name":"ネクロ・ドグマ","name_tw":"死靈教義","desc":"敵全体に万能属性の魔法型ダメージを威力100で与え、3ターンの間、味方全体の防御力を20％増加させる。","name_en":"Necro Dogma","desc_en":"Inflicts Almighty (Magic) damage with 100 power on All Enemies and reduces enemy's ATK by 20% for 3 turns.","mp":9,"point":null,"element":"万能"},
            {"name":"ディスタブ","name_tw":"擾亂攻擊","desc":"敵全体に万能属性の魔法型ダメージを威力100で与え、3ターンの間、敵全体の回避と命中を20％減少させる。","name_en":"Rattle","desc_en":"Inflicts Almighty (Magic) damage with 100 power on All Enemies and reduces all enemy EV/AC by 20% for 3 turns.","mp":9,"point":null,"element":"万能"},
            {"name":"精神支配","name_tw":"精神控制","desc":"敵単体に万能属性の魔法型ダメージを威力100で与え、MPを4失わせる。","name_en":"Mind Blast","desc_en":"Inflicts Almighty (Magic) damage on a single enemy with 100 power and reduces MP by 4.","mp":7,"point":null,"element":"万能"},
            {"name":"先見の啓示","name_tw":"先見啟示","desc":"敵全体に万能属性の魔法型ダメージを威力100で与え、3ターンの間、味方全体の回避と命中を20％増加させる。","name_en":"Foresight","desc_en":"Inflicts Almighty (Magic) damage on all enemies and increases own parties EV/AC by 20%. (3 turns) Power: 100","mp":9,"point":null,"element":"万能"}
        ]
    },
    {
        name:"回復",
        namw_tw:"回復",
        name_en:"Heal",
        skills:[
            //回
            {"name":"ディア","name_tw":"迪亞","desc":"味方単体を回復力50で回復する。","name_en":"Dia","desc_en":"Heals a Single Party Member with 50 power. (9 uses)","mp":4,"point":1,"element":"無"},
            {"name":"ディアラ","name_tw":"迪亞拉","desc":"味方単体を回復力90で回復する。","name_en":"Diara","desc_en":"Heals a Single Party Member with 90 power. (9 uses)","mp":5,"point":5,"element":"無"},
            {"name":"ディアラマ","name_tw":"迪亞拉瑪","desc":"味方単体を回復力130で回復する。","name_en":"Diarama","desc_en":"Heals a Single Party Member with 130 power. (9 uses)","mp":6,"point":8,"element":"無"},
            {"name":"ディアラハン","name_tw":"迪亞拉瑪翰","desc":"味方単体を回復力170で回復する。","name_en":"Diarahan","desc_en":"Heals a Single Party Member with 170 power. (9 uses)","mp":7,"point":"11","element":"無"},
            {"name":"メディア","name_tw":"梅迪亞","desc":"味方全体を回復力25で回復する。","name_en":"Media","desc_en":"Heals All Party Members with 25 power. (9 uses)","mp":6,"point":2,"element":"無"},
            {"name":"メディラ","name_tw":"梅迪拉","desc":"味方全体を回復力60で回復する。","name_en":"Mediara","desc_en":"Heals All Party Members with 60 power. (9 uses)","mp":7,"point":5,"element":"無"},
            {"name":"メディラマ","name_tw":"梅迪拉瑪","desc":"味方全体を回復力95で回復する。","name_en":"Mediarama","desc_en":"Heals All Party Members with 95 power. (9 uses)","mp":8,"point":8,"element":"無"},
            {"name":"メディアラハン","name_tw":"梅迪亞拉翰","desc":"味方全体を回復力130で回復する。","name_en":"Mediarahan","desc_en":"Heals All Party Members with 130 power. (9 uses)","mp":9,"point":"11","element":"無"},
            {"name":"メシアライザー","name_tw":"救世主喚起者","desc":"味方全体を回復力95で回復し、状態異常を全て回復する。","name_en":"Salvation","desc_en":"Heals All Party Members with 95 power. Cures all status aliments. (3 uses)","mp":"10","point":"15","element":"無"},
            {"name":"オルレアンの祈り","name_tw":'',"desc":"味方単体のHPを回復力130で回復すると同時にMPを3回復する。","name_en":"Orlean Prayer","desc_en":"Heals a Single Party Member with 130 power and recovers 3 MP. (6 uses)","mp":null,"point":null,"element":"無"},
            //持回
            {"name":"リディア","name_tw":"利迪亞","desc":"３回行動するまでの間、味方単体をリディア状態にし、行動する前にHPを回復する。","name_en":"Lydia","desc_en":"Casts Lydia on a Single Party Member, healing their HP at the beginning of their turn for 3 turns.","mp":4,"point":8,"element":"無"},
            {"name":"リディアコワース","name_tw":"利迪亞破壞","desc":"敵全体のリディア状態を解除する。","name_en":"Lydia Break","desc_en":"Removes Lydia from All Enemies.","mp":3,"point":6,"element":"無"},
            //復活
            {"name":"リカーム","name_tw":"利卡姆","desc":"死亡している味方単体をHP10％で復活させる。","name_en":"Recarm","desc_en":"Revive a Single Party Member with 10% HP. (3 uses)","mp":6,"point":6,"element":"無"},
            {"name":"サマリカーム","name_tw":"薩瑪利卡姆","desc":"死亡している味方単体を完全回復で復活させる。","name_en":"Samarecarm","desc_en":"Revive a Single Party Member with full HP. (1 use)","mp":8,"point":8,"element":"無"},
            {"name":"リカームドラ","name_tw":"利卡姆托拉","desc":"死亡している味方全体を完全回復で復活させるが、自身は死亡する。","name_en":"Recarmdra","desc_en":"Revive All Party Members with full HP, caster dies. (1 use)","mp":8,"point":"10","element":"無"},
            {"name":"母なる創造","name_tw":'',"desc":"死亡している味方単体を完全回復で復活させ、リディア状態にする。","name_en":"Mother's Creation","desc_en":"Revive a Single Party Member with full HP and endows Lydia. (1 use)","mp":8,"point":null,"element":"無"},
            {"name":"セアカトルの再臨","name_tw":'',"desc":"死亡している味方全体を完全回復で復活(使用した悪魔も死なない)。","name_en":"Ce Acatls' Return","desc_en":"Revive All Party Members with full HP. (1 use)","mp":null,"point":null,"element":"無"},
            //解毒
            {"name":"ポズムディ","name_tw":"病毒解除術","desc":"味方単体の毒を回復する。","name_en":"Posumudi","desc_en":"Cures a Single Party Member of Poison. Reduces the chance of being Poisoned during this wave by 30%.","mp":3,"point":1,"element":"無"},
            {"name":"メポズムディ","name_tw":"梅波茲姆迪","desc":"味方全体の毒を回復する。","name_en":"Meposumudi","desc_en":"Cures All Party Members of Poison. Reduces the chance of being Poisoned during this wave by 30%.","mp":4,"point":5,"element":"無"},
            //解封
            {"name":"クロズディ","name_tw":"克洛茲迪","desc":"味方単体の魔封を回復する。","name_en":"Mutudi","desc_en":"Cures a Single Party Member of Mute. Reduces the chance of being Muteed during this wave by 30%.","mp":3,"point":1,"element":"無"},
            {"name":"メクロズディ","name_tw":"梅克洛茲迪","desc":"味方全体の魔封を回復する。","name_en":"Memutudi","desc_en":"Cures All Party Members of Mute. Reduces the chance of being Muteed during this wave by 30%.","mp":4,"point":5,"element":"無"},
            //解縛
            {"name":"パララディ","name_tw":"帕拉拉迪","desc":"味方単体の緊縛を回復する。","name_en":"Paraladi","desc_en":"Cures a Single Party Member of Bind. Reduces the chance of being Binded during this wave by 30%.","mp":3,"point":1,"element":"無"},
            {"name":"メパララディ","name_tw":"梅帕拉拉迪","desc":"味方全体の緊縛を回復する。","name_en":"Meparaladi","desc_en":"Cures All Party Members of Bind. Reduces the chance of being Binded during this wave by 30%.","mp":4,"point":5,"element":"無"},
            //解魅
            {"name":"チャームディ","name_tw":"查姆蒂","desc":"味方単体の魅了を回復する。","name_en":"Charmdi","desc_en":"Cures a Single Party Member of Charm. Reduces the chance of being Charmed during this wave by 30%.","mp":3,"point":1,"element":"無"},
            {"name":"メチャームディ","name_tw":"梅查姆蒂","desc":"味方全体の魅了を回復する。","name_en":"Mecharmdi","desc_en":"Cures All Party Members of Charm. Reduces the chance of being Charmed during this wave by 30%.","mp":4,"point":5,"element":"無"},
            //解呪
            {"name":"カースディ","name_tw":"卡斯迪","desc":"味方単体の呪いを回復する。","name_en":"Cursedi","desc_en":"Cures a Single Party Member of Curse. Reduces the chance of being Cursed during this wave by 30%.","mp":3,"point":1,"element":"無"},
            {"name":"メカースディ","name_tw":"梅卡斯迪","desc":"味方全体の呪いを回復する。","name_en":"Mekasudi","desc_en":"Cures All Party Members of Curse. Reduces the chance of being Cursed during this wave by 30%.","mp":4,"point":5,"element":"無"},
            //解虛
            {"name":"ウィークディ","name_tw":"溫坤迪","desc":"味方単体の虚弱を回復する。","name_en":"Weakdi","desc_en":"Cures a Single Party Member of Weak. Reduces the chance of being Weakened during this wave by 30%.","mp":3,"point":1,"element":"無"},
            {"name":"メウィークディ","name_tw":"梅溫庫迪","desc":"味方全体の虚弱を回復する。","name_en":"Meweakdi","desc_en":"Cures All Party Members of Weak. Reduces the chance of being Weakened during this wave by 30%.","mp":4,"point":5,"element":"無"},
            //解異常
            {"name":"アムリタ","name_tw":"甘露","desc":"味方単体の状態異常を全て回復する。","name_en":"Amrita","desc_en":"Cures all status ailments of a Single Party Member.","mp":4,"point":3,"element":"無"},
            {"name":"常世の祈り","name_tw":"永恆的祈禱","desc":"味方全体の状態異常を全て回復する。","name_en":"Prayer","desc_en":"Cures all status ailments of All Party Members.","mp":5,"point":8,"element":"無"},
            {"name":"静寂の祈り","name_tw":"寂靜的禱告","desc":"敵味方全体の状態異常を全て回復する。","name_en":"Silent Prayer","desc_en":"Cures all status ailments of All Party Members and Enemies.","mp":7,"point":8,"element":"無"},
            //狀態
            {"name":"バリア","name_tw":"防壁","desc":"３ターンの間、味方単体をバリア状態にし、状態異常を無効にする。","name_en":"Barrier","desc_en":"Casts a Barrier on a Single Party Member, granting immunity to all status ailments for 3 turns.","mp":4,"point":8,"element":"無"},
            {"name":"バリアコワース","name_tw":"防壁破壞","desc":"敵全体のバリア状態を解除する。","name_en":"Barrier Break","desc_en":"Remove Barrier from All Enemies.","mp":3,"point":6,"element":"無"}
        ]
    },
    {
        name:"異常",
        name_tw:"異常",
        name_en:"Ailment",
        skills:[
            //毒
            {"name":"ポイズマ","name_tw":"波伊佐瑪","desc":"敵単体を基礎確率40%で毒状態にする。","name_en":"Poisma","desc_en":"40% chance to inflict Poison on a Single Enemy.","mp":5,"point":2,"element":"無"},
            {"name":"ポイズマオン","name_tw":"波伊佐瑪翁","desc":"敵単体を基礎確率50%で毒状態にする。","name_en":"Poismaon","desc_en":"50% chance to inflict Poison on a Single Enemy.","mp":6,"point":null,"element":"無"},
            {"name":"マハポイズマ","name_tw":"瑪哈波伊佐瑪","desc":"敵全体を基礎確率30%で毒状態にする。","name_en":"Mahapoisma","desc_en":"30% chance to inflict Poison on All Enemies.","mp":6,"point":null,"element":"無"},
            {"name":"マハポイズマオン","name_tw":"瑪哈波伊佐瑪翁","desc":"敵全体を基礎確率40%で毒状態にする。","name_en":"Mahapoismaon","desc_en":"40% chance to inflict Poison on All Enemies.","mp":7,"point":null,"element":"無"},
            {"name":"毒ガスブレス","name_tw":"猛毒吐息","desc":"ランダムな敵を3~4回、基礎確率30％で毒状態にする。","name_en":"Toxic Cloud","desc_en":"30% chance to inflict Poison 3 to 4 times on Random Enemy/ies.","mp":6,"point":7,"element":"無"},
            //縛
            {"name":"シバブー","name_tw":"希巴縛","desc":"敵単体を基礎確率40%で緊縛状態にする。","name_en":"Shibaboo","desc_en":"40% chance to inflict Bind on a Single Enemy.","mp":5,"point":2,"element":"無"},
            {"name":"シバブオン","name_tw":"希巴縛翁","desc":"敵単体を基礎確率50%で緊縛状態にする。","name_en":"Shibabooon","desc_en":"50% chance to inflict Bind on a Single Enemy.","mp":6,"point":8,"element":"無"},
            {"name":"マハシバブー","name_tw":"瑪哈希巴縛","desc":"敵全体を基礎確率30%で緊縛状態にする。","name_en":"Mahashibaboo","desc_en":"30% chance to inflict Bind on All Enemies.","mp":6,"point":5,"element":"無"},
            {"name":"マハシバブオン","name_tw":"瑪哈希巴縛翁","desc":"敵全体を基礎確率40%で緊縛状態にする。","name_en":"Mahashibabooon","desc_en":"40% chance to inflict Bind on All Enemies.","mp":7,"point":null,"element":"無"},
            {"name":"バインドボイス","name_tw":"束縛咆嘯","desc":"ランダムな敵を3~4回、基礎確率30%で緊縛状態にする。","name_en":"Binding Cry","desc_en":"30% chance to inflict Bind 3 to 4 times on Random Enemy/ies.","mp":6,"point":null,"element":"無"},
            //魅
            {"name":"マリンカリン","name_tw":"瑪琳卡琳","desc":"敵単体を基礎確率40%で魅了状態にする。","name_en":"Marin Karin","desc_en":"40% chance to inflict Charm on a Single Enemy.","mp":5,"point":2,"element":"無"},
            {"name":"マリンカリオン","name_tw":"瑪琳卡琳翁","desc":"敵単体を基礎確率50%で魅了状態にする。","name_en":"Marin Karion","desc_en":"50% chance to inflict Charm on a Single Enemy.","mp":6,"point":null,"element":"無"},
            {"name":"マハマリンカリン","name_tw":"瑪哈瑪琳卡琳","desc":"敵全体を基礎確率30%で魅了状態にする。","name_en":"Mahamarin Karin","desc_en":"30% chance to inflict Charm on All Enemies.","mp":6,"point":5,"element":"無"},
            {"name":"マハマリカリオン","name_tw":"瑪哈瑪琳卡琳翁","desc":"敵全体を基礎確率40%で魅了状態にする。","name_en":"Mahamarin Karion","desc_en":"40% chance to inflict Charm on All Enemies.","mp":7,"point":null,"element":"無"},
            {"name":"セクシーダンス","name_tw":"色誘之舞","desc":"ランダムな敵を3~4回、基礎確率30%で魅了状態にする。","name_en":"Sexy Dance","desc_en":"30% chance to inflict Charm 3 to 4 times on Random Enemy/ies.","mp":6,"point":7,"element":"無"},
            {"name":"蓮華の舞","name_tw":"蓮華之舞","desc":"敵全体を基礎確率60％で魅了状態にする。","name_en":"Lotus Dance","desc_en":"60% chance to inflict Charm on All Enemies.","mp":6,"point":null,"element":"無"},
            //封
            {"name":"マカジャマ","name_tw":"瑪卡加瑪","desc":"敵単体を基礎確率40%で魔封状態にする。","name_en":"Makajam","desc_en":"40% chance to inflict Mute on a Single Enemy.","mp":5,"point":2,"element":"無"},
            {"name":"マカジャマオン","name_tw":"瑪卡加瑪翁","desc":"敵単体を基礎確率40%で魔封状態にする。","name_en":"Makajamaon","desc_en":"50% chance to inflict Mute on a Single Enemy.","mp":6,"point":8,"element":"無"},
            {"name":"マハマカジャマ","name_tw":"瑪哈瑪卡加瑪","desc":"敵全体を基礎確率30%で魔封状態にする。","name_en":"Mahamakajam","desc_en":"30% chance to inflict Mute on All Enemies.","mp":6,"point":5,"element":"無"},
            {"name":"マハマカジャオン","name_tw":"瑪哈瑪卡加瑪翁","desc":"敵全体を基礎確率40%で魔封状態にする。","name_en":"Mahamakajamaon","desc_en":"40% chance to inflict Mute on All Enemies.","mp":7,"point":9,"element":"無"},
            {"name":"ホワイトノイズ","name_tw":"白茫噪音","desc":"ランダムな敵を2~4回、基礎確率30%で魔封状態にする。","name_en":"White Noise","desc_en":"30% chance to inflict Mute 3 to 4 times on Random Enemy/ies.","mp":6,"point":7,"element":"無"},
            //呪
            {"name":"ジュ","name_tw":"祖","desc":"敵単体を基礎確率50％で呪い状態にする。","name_en":"Ju","desc_en":"50% chance to inflict Curse on a Single Enemy.","mp":5,"point":2,"element":"無"},
            {"name":"ジュオン","name_tw":"祖翁","desc":"敵単体を基礎確率60％で呪い状態にする。","name_en":"Juon","desc_en":"60% chance to inflict Curse on a Single Enemy.","mp":6,"point":8,"element":"無"},
            {"name":"マハジュ","name_tw":"瑪哈祖","desc":"敵全体を基礎確率40％で呪い状態にする。","name_en":"Mahaju","desc_en":"40% chance to inflict Curse on All Enemies.","mp":6,"point":5,"element":"無"},
            {"name":"マハジュオン","name_tw":"瑪哈祖翁","desc":"敵全体を基礎確率50％で呪い状態にする。","name_en":"Mahajuon","desc_en":"50% chance to inflict Curse on All Enemies.","mp":7,"point":9,"element":"無"},
            {"name":"祟り","name_tw":"報應","desc":"ランダムな敵を3~4回、基礎確率40％で呪い状態にする。","name_en":"Vengeance","desc_en":"40% chance to inflict Curse 3 to 4 times on Random Enemy/ies.","mp":6,"point":7,"element":"無"},
            //虛
            {"name":"デゾレト","name_tw":"特奏累托","desc":"敵単体を基礎確率70％で虚弱状態にする。","name_en":"Dezoreto","desc_en":"70% chance to inflict Weak on a Single Enemy.","mp":5,"point":2,"element":"無"},
            {"name":"デゾレトオン","name_tw":"特奏累托翁","desc":"敵単体を基礎確率80％で虚弱状態にする。","name_en":"Dezoreton","desc_en":"80% chance to inflict Weak on a Single Enemy.","mp":6,"point":8,"element":"無"},
            {"name":"マハデゾレト","name_tw":"瑪哈特奏累托","desc":"敵全体を基礎確率60％で虚弱状態にする。","name_en":"Madezoreto","desc_en":"60% chance to inflict Weak on All Enemies.","mp":6,"point":5,"element":"無"},
            {"name":"マハデゾレトオン","name_tw":"瑪哈特奏累托翁","desc":"敵全体を基礎確率70％で虚弱状態にする。","name_en":"Madezoreton","desc_en":"70% chance to inflict Weak on All Enemies.","mp":7,"point":9,"element":"無"},
            {"name":"アウトブレイク","name_tw":"威力爆發","desc":"ランダムな敵を3~4回、基礎確率60％で虚弱状態にする。","name_en":"Outbreak","desc_en":"60% chance to inflict Weak 3 to 4 times on Random Enemy/ies.","mp":6,"point":7,"element":"無"}
        ]
    },
    {
        name:"增強",
        name_tw:"增強",
        name_en:"Support",
        skills:[
            //蓄力
            {"name":"チャージ","name_tw":"蓄力","desc":"自身をチャージ状態にし、次に与える打撃型ダメージを125％増加させる。","name_en":"Charge","desc_en":"Self enters a state of Charge. Increases the next Phys attack damage by 125%.","mp":6,"point":8,"element":"無"},
            {"name":"リベリオン","name_tw":"反叛","desc":"自身を会心状態にし、次に行う打撃型攻撃を必ずクリティカルにする。","name_en":"Rebellion","desc_en":"Self enters a state of Might. The next Phys attack will have a Critical effect.","mp":6,"point":8,"element":"無"},
            {"name":"反逆の魔象","name_tw":"反叛魔象","desc":"自身をチャージと会心状態にし、次に与える打撃型ダメージを125％増加させ、攻撃が必ずクリティカルになる。","name_en":"Mega Boost","desc_en":"Self enters a state of Charge and Might. Increases the next Phys attack damage by 125% and will have a Critical effect.","mp":6,"point":null,"element":"無"},
            {"name":"コンセントレイト","name_tw":"專注","desc":"自身をコンセントレイト状態にし、次に与える魔法型ダメージを125％増加させる。","name_en":"Concentrate","desc_en":"Self enters a state of Concentrate. Increases the next Mag attack damage by 125%.","mp":6,"point":8,"element":"無"},
            {"name":"ディスコード","name_tw":"異調相斥","desc":"敵全体のチャージ、コンセントレイト、会心状態を解除する。","name_en":"Discord","desc_en":"Removes Charge, Concentrate and Might from All Enemies.","mp":3,"point":6,"element":"無"},
            {"name":"バトンタッチ","name_tw":"下一位","desc":"自身のプレスターンアイコンを消費せずにパスを行う。","name_en":"Tag","desc_en":"Self skips a turn without using a Press Turn Icon.","mp":3,"point":6,"element":"無"},
            {"name":"レッドゾーン","name_tw":"警戒區域","desc":"	味方全体を会心状態にし、次に行う打撃型攻撃を必ずクリティカルにする。","name_en":"Red Zone","desc_en":"All Party Members enter a state of Might. The next Phys attack will have a Critical effect. (3 uses)","mp":7,"point":null,"element":"無"},
            //反射
            {"name":"テトラカーン","name_tw":"提特拉康","desc":"１ターンの間、味方全体を打撃型ダメージ反射状態にする。","name_en":"Tetrakarn","desc_en":"All Party Members repels Physical damage for 1 turn.","mp":7,"point":8,"element":"無"},
            {"name":"マカラカーン","name_tw":"瑪卡拉康","desc":"１ターンの間、味方全体を魔法型ダメージ反射状態にする。","name_en":"Makarakarn","desc_en":"All Party Members repels Magic damage for 1 turn.","mp":7,"point":8,"element":"無"},
            {"name":"五行思想","name_tw":"五行思想","desc":"１ターンの間、味方全体を万能属性も含めた魔法型ダメージ反射状態にする。","name_en":"Five Elements ","desc_en":"All Party Members repels Magic (including Almighty) damage for 1 turn.","mp":null,"point":null,"element":"無"},
            {"name":"テトラコワース","name_tw":"提特拉破壞","desc":"敵全体の打撃型ダメージ反射状態を解除する。","name_en":"Tetra Break","desc_en":"Removes Repel Phys from All Enemies.","mp":3,"point":6,"element":"無"},
            {"name":"マカラコワース","name_tw":"瑪卡拉破壞","desc":"敵全体の魔法型ダメージ反射状態を解除する。","name_en":"Makara Break","desc_en":"Removes Repel Mag from All Enemies.","mp":3,"point":6,"element":"無"},
            //防即死
            {"name":"テトラジャ","name_tw":'',"desc":"１ターンの間、味方全体をスキルによる即死無效狀態にする。","name_en":"Tetraja","desc_en":"All Party Members will evade Instant Kill for 1 turn","mp":null,"point":null,"element":"無"},
            //強弱化
            {"name":"タルカジャ","name_tw":"塔爾卡加","desc":"３ターンの間、味方全体の攻撃力を20％増加させる。","name_en":"Tarukaja","desc_en":"Increases ATK of All Party Members by 20% for 3 turns.","mp":5,"point":6,"element":"無"},
            {"name":"ラクカジャ","name_tw":"拉庫卡加","desc":"３ターンの間、味方全体の防御力を20％増加させる。","name_en":"Rakukaja","desc_en":"Increases DEF of All Party Members by 20% for 3 turns.","mp":5,"point":6,"element":"無"},
            {"name":"スクカジャ","name_tw":"斯庫卡加","desc":"３ターンの間、味方全体の回避と命中を20％増加させる。","name_en":"Sukukaja","desc_en":"Increases EV/AC of All Party Members by 20% for 3 turns.","mp":5,"point":6,"element":"無"},
            {"name":"タルンダ","name_tw":"塔倫達","desc":"３ターンの間、敵全体の攻撃力を20％減少させる。","name_en":"Tarunda","desc_en":"Reduces ATK of All Party Members by 20% for 3 turns.","mp":5,"point":6,"element":"無"},
            {"name":"ラクンダ","name_tw":"拉昆達","desc":"３ターンの間、敵全体の防御力を20％減少させる。","name_en":"Rakunda","desc_en":"Reduces DEF of All Party Members by 20% for 3 turns.","mp":5,"point":6,"element":"無"},
            {"name":"スクンダ","name_tw":"斯坤達","desc":"３ターンの間、敵全体の回避と命中を20％減少させる。","name_en":"Sukunda","desc_en":"Reduces EV/AC of All Party Members by 20% for 3 turns.","mp":5,"point":6,"element":"無"},
            {"name":"デカジャ","name_tw":"迪卡加","desc":"敵全体のステータス強化効果を解除する。","name_en":"Dekaja","desc_en":"Remove buffs from All Enemies.","mp":5,"point":4,"element":"無"},
            {"name":"デクンダ","name_tw":"迪坤達","desc":"味方全体のステータス弱体化効果を解除する。","name_en":"Dekunda","desc_en":"Remove debuffs from All Party Members.","mp":5,"point":4,"element":"無"},
            {"name":"闇のパンデミア","name_tw":"黑暗瘟疫","desc":"敵全体のステータス強化効果を解除し、3ターンの間、敵全体の攻撃力・防御力・回避と命中のいずれかを20%減少させる。","name_en":"Dark Pandemic","desc_en":"Remove buffs from All Enemies, then reduces ATK or DEF or EV/AC of All Enemies by 20% for 3 turns.","mp":5,"point":null,"element":"無"},
            {"name":"バロンダンス","name_tw":"巴隆之舞","desc":"味方全体を回復力95で回復し、３ターンの間、味方全体の攻撃力・防御力・回避と命中をそれぞれ20％ずつ増加させる。","name_en":"Barong Dance","desc_en":"Heals All Party Members with 95 power and increases ATK, DEF, EV/AC of All Party Members by 20% for 3 turns. (3 uses)","mp":7,"point":null,"element":"無"},
            {"name":"天孫降臨","name_tw":"天孫降臨","desc":"味方全体のステータス弱体化効果を解除し、6ターンの間、味方全体の攻撃力・防御力・回避と命中をそれぞれ20%ずつ増加させる。","name_en":"Tenson Kourin","desc_en":"Increases ATK, DEF, EV/AC of All Party Members by 20% for 6 turns. (3 uses)","mp":8,"point":null,"element":"無"},
            {"name":"ラスタキャンディ","name_tw":"強化糖球","desc":"3ターンの間、味方全体の攻撃力・防御力・回避と命中をそれぞれ20%ずつ増加させる。","name_en":"Luster Candy","desc_en":"Increases ATK, DEF, EV/AC of All Party Members by 20% for 3 turns.","mp":8,"point":null,"element":"無"},
            {"name":"雄叫び","name_tw":"吶喊","desc":"３ターンの間、敵全体の攻撃力・防御力をそれぞれ20％ずつ減少させる。","name_en":"War Cry","desc_en":"Reduces ATK and DEF of All Enemies by 20% for 3 turns.","mp":6,"point":8,"element":"無"},
            {"name":"溶解ブレス","name_tw":"溶解吐息","desc":"３ターンの間、敵全体の防御力・回避と命中をそれぞれ20％ずつ減少させる。","name_en":"Acid Breath","desc_en":"Reduces DEF and EV/AC of All Enemies by 20% for 3 turns.","mp":6,"point":8,"element":"無"},
            {"name":"フォッグブレス","name_tw":"迷霧吐息","desc":"３ターンの間、敵全体の攻撃力・回避と命中をそれぞれ20％ずつ減少させる。","name_en":"Fog Breath","desc_en":"Reduces ATK and EV/AC of All Enemies by 20% for 3 turns.","mp":6,"point":8,"element":"無"},
            {"name":"挑発","name_tw":"挑釁","desc":"３ターンの間、敵全体の攻撃力を20％増加させ、防御力を20％減少させる。","name_en":"Taunt","desc_en":"Increases ATK and reduces of DEF of All Enemies by 20% for 3 turns.","mp":3,"point":8,"element":"無"},
            {"name":"ランダマイザ","name_tw":"女巫詛咒","desc":"３ターンの間、敵全体の攻撃力・防御力・回避と命中をそれぞれ20％ずつ減少させる。","name_en":"Debilitate","desc_en":"Reduces ATK, DEF, and EV/AC of All Enemies by 20% for 3 turns.","mp":8,"point":"15","element":"無"},
            {"name":"宵闇の調べ","name_tw":"宵闇旋律","desc":"3ターンの間、味方全体の防御力・回避と命中をそれぞれ20％ずつ上昇させる。","name_en":"Nocturne","desc_en":"Increases own party's DEF and EV/AC by 20% for 3 turns.","mp":6,"point":null,"element":"無"},
            {"name":"護国の咆哮","name_tw":"護國咆哮","desc":"3ターンの間、敵全体の攻撃力を20％減少させ、味方全体の防御力を20％増加させる。","name_en":"Defensive Cry","desc_en":"Reduce all enemy ATK and increases own party's DEF by 20% for 3 turns.","mp":7,"point":null,"element":"無"},
            {"name":"討滅の咆哮","name_tw":"征伐咆哮","desc":"3ターンの間、敵全体の防御力を20％減少させ、味方全体の攻撃力を20％増加させる。","name_en":"Offensive Cry","desc_en":"Reduces all enemy DEF and increases own parties ATK by 20% for 3 turns.","mp":7,"point":null,"element":"無"},
            {"name":"勇奮の鼓舞","name_tw":"奮勇鼓舞","desc":"3ターンの間、味方全体の攻撃力・防御力をそれぞれ20％ずつ上昇させる。","name_en":"War Dance","desc_en":"Increases own parties ATK and DEF by 20% for 3 turns.","mp":6,"point":null,"element":"無"},
            {"name":"早手の舞い","name_tw":"迅捷演舞","desc":"3ターンの間、味方全体の攻撃力・回避と命中をそれぞれ20％ずつ上昇させる。","name_en":"Blood Rush","desc_en":"Increases own parties ATK and EV/AC by 20%. (3 turns)","mp":6,"point":null,"element":"無"}
        ]
    },
    {
        name:"属性",
        name_tw:"屬性",
        name_en:"Resistance Passive",
        skills:[
            //強化
            {"name":"物理ブースタ","name_tw":"物理強化","desc":"物理属性で与えるダメージが15％増加する。","name_en":"Phys Boost","desc_en":"+15% to Phys damage.","mp":null,"point":6,"element":"パシップ"},
            {"name":"物理ハイブースタ","name_tw":"高級物理強化","desc":"物理属性で与えるダメージが25％増加する。","name_en":"Phys Amp","desc_en":"+25% to Phys damage.","mp":null,"point":"21","element":"パシップ"},
            {"name":"火炎ブースタ","name_tw":"火炎強化","desc":"火炎属性で与えるダメージが15％増加する。","name_en":"Fire Boost","desc_en":"+15% to Fire damage.","mp":null,"point":6,"element":"パシップ"},
            {"name":"火炎ハイブースタ","name_tw":"高級火炎強化","desc":"火炎属性で与えるダメージが25％増加する。","name_en":"Fire Amp","desc_en":"+25% to Fire damage.","mp":null,"point":21,"element":"パシップ"},
            {"name":"氷結ブースタ","name_tw":"冰凍強化","desc":"氷結属性で与えるダメージが15％増加する。","name_en":"Ice Boost","desc_en":"+15% to Ice damage.","mp":null,"point":6,"element":"パシップ"},
            {"name":"氷結ハイブースタ","name_tw":"高級冰凍強化","desc":"氷結属性で与えるダメージが25％増加する。","name_en":"Ice Amp","desc_en":"+25% to Ice damage.","mp":null,"point":21,"element":"パシップ"},
            {"name":"電撃ブースタ","name_tw":"電擊強化","desc":"電撃属性で与えるダメージが15％増加する。","name_en":"Elec Boost","desc_en":"+15% to Elec damage.","mp":null,"point":6,"element":"パシップ"},
            {"name":"電撃ハイブースタ","name_tw":"高級電擊強化","desc":"電撃属性で与えるダメージが25％増加する。","name_en":"Elec Amp","desc_en":"+25% to Elec damage.","mp":null,"point":"21","element":"パシップ"},
            {"name":"衝撃ブースタ","name_tw":"衝擊強化","desc":"衝撃属性で与えるダメージが15％増加する。","name_en":"Force Boost","desc_en":"+15% to Force damage.","mp":null,"point":6,"element":"パシップ"},
            {"name":"衝撃ハイブースタ","name_tw":"高級衝擊強化","desc":"衝撃属性で与えるダメージが25％増加する。","name_en":"Force Amp","desc_en":"+25% to Force damage.","mp":null,"point":"21","element":"パシップ"},
            {"name":"破魔ブースタ","name_tw":"破魔強化","desc":"破魔属性で与えるダメージが15％増加する。","name_en":"Light Boost","desc_en":"+15% to Light damage.","mp":null,"point":6,"element":"パシップ"},
            {"name":"破魔ハイブースタ","name_tw":"高級破魔強化","desc":"破魔属性で与えるダメージが25％増加する。","name_en":"Light Amp","desc_en":"+25% to Light damage.","mp":null,"point":21,"element":"パシップ"},
            {"name":"呪殺ブースタ","name_tw":"咒殺強化","desc":"呪殺属性で与えるダメージが15％増加する。","name_en":"Dark Boost","desc_en":"+15% to Dark damage.","mp":null,"point":6,"element":"パシップ"},
            {"name":"呪殺ハイブースタ","name_tw":"高級咒殺強化","desc":"呪殺属性で与えるダメージが25％増加する。","name_en":"Dark Amp","desc_en":"+25% to Dark damage.","mp":null,"point":"21","element":"パシップ"},
            {"name":"回復ブースタ","name_tw":"回復強化","desc":"回復スキルの回復量が15％増加する。","name_en":"Recovery Boost","desc_en":"+15% to Healing skill effectiveness.","mp":null,"point":6,"element":"パシップ"},
            {"name":"回復ハイブースタ","name_tw":"高級回復強化","desc":"回復スキルの回復量が25％増加する。","name_en":"Recovery Amp","desc_en":"+25% to Healing skill effectiveness.","mp":null,"point":"21","element":"パシップ"},
            //貫通
            {"name":"物理貫通","name_tw":"物理貫通","desc":"物理貫通を得る。","name_en":"Phys Pierce","desc_en":"Phys attacks bypass resistances","mp":null,"point":"32","element":"パシップ"},
            {"name":"帝の権威","name_tw":"帝王權威","desc":"物理命中率が20%増加し、物理貫通を得る。","name_en":"Superior Power","desc_en":"+20% to Phys hit rate and adds Phys Pierce.","mp":null,"point":null,"element":"パシップ"},
            {"name":"火炎貫通","name_tw":"火炎貫通","desc":"火炎貫通を得る。","name_en":"Fire Pierce","desc_en":"Fire attacks bypass resistances","mp":null,"point":"32","element":"パシップ"},
            {"name":"氷結貫通","name_tw":"氷結貫通","desc":"氷結貫通を得る。","name_en":"Ice Pierce","desc_en":"Ice attacks bypass resistances","mp":null,"point":"32","element":"パシップ"},
            {"name":"電撃貫通","name_tw":"電擊貫通","desc":"電撃貫通を得る。","name_en":"Elec Pierce","desc_en":"Elec attacks bypass resistances","mp":null,"point":"32","element":"パシップ"},
            {"name":"衝撃貫通","name_tw":"衝擊貫通","desc":"衝撃貫通を得る。","name_en":"Force Pierce","desc_en":"Force attacks bypass resistances","mp":null,"point":"32","element":"パシップ"},
            //耐性
            {"name":"物理耐性","name_tw":"物理耐性","desc":"物理耐性を得る。","name_en":"Resist Phys","desc_en":"Resist Phys damage","mp":null,"point":"12","element":"パシップ"},
            {"name":"火炎耐性","name_tw":"火炎耐性","desc":"火炎耐性を得る。","name_en":"Resist Fire","desc_en":"Resist Fire damage","mp":null,"point":8,"element":"パシップ"},
            {"name":"氷結耐性","name_tw":"冰凍耐性","desc":"氷結耐性を得る。","name_en":"Resist Ice","desc_en":"Resist Ice damage","mp":null,"point":8,"element":"パシップ"},
            {"name":"電撃耐性","name_tw":"電擊耐性","desc":"電撃耐性を得る。","name_en":"Resist Elec","desc_en":"Resist Elec damage","mp":null,"point":8,"element":"パシップ"},
            {"name":"衝撃耐性","name_tw":"衝擊耐性","desc":"衝撃耐性を得る。","name_en":"Resist Force","desc_en":"Resist Force damage","mp":null,"point":8,"element":"パシップ"},
            {"name":"破魔耐性","name_tw":"破魔耐性","desc":"破魔耐性を得る。","name_en":"Resist Light","desc_en":"Resist Light damage","mp":null,"point":8,"element":"パシップ"},
            {"name":"呪殺耐性","name_tw":"咒殺耐性","desc":"呪殺耐性を得る。","name_en":"Resist Dark","desc_en":"Resist Dark damage","mp":null,"point":8,"element":"パシップ"},

            {"name":"物理無効","name_tw":"物理無效","desc":"物理無効を得る。","name_en":"Null Phys","desc_en":"Nullify Phys damage","mp":null,"point":"18","element":"パシップ"},
            {"name":"火炎無効","name_tw":"火炎無效","desc":"火炎無効を得る。","name_en":"Null Fire","desc_en":"Nullify Fire damage","mp":null,"point":"12","element":"パシップ"},
            {"name":"氷結無効","name_tw":"冰凍無效","desc":"氷結無効を得る。","name_en":"Null Ice","desc_en":"Nullify Ice damage","mp":null,"point":"12","element":"パシップ"},
            {"name":"電撃無効","name_tw":"電擊無效","desc":"電撃無効を得る。","name_en":"Null Elec","desc_en":"Nullify Elec damage","mp":null,"point":"12","element":"パシップ"},
            {"name":"衝撃無効","name_tw":"衝擊無效","desc":"衝撃無効を得る。","name_en":"Null Force","desc_en":"Nullify Force damage","mp":null,"point":"12","element":"パシップ"},
            {"name":"破魔無効","name_tw":"破魔無效","desc":"破魔無効を得る。","name_en":"Null Light","desc_en":"Nullify Light damage","mp":null,"point":"12","element":"パシップ"},
            {"name":"呪殺無効","name_tw":"咒殺無效","desc":"呪殺無効を得る。","name_en":"Null Dark","desc_en":"Nullify Dark damage","mp":null,"point":"12","element":"パシップ"},

            {"name":"物理反射","name_tw":"物理反射","desc":"物理反射を得る。","name_en":"Repel Phys","desc_en":"Repel Phys damage","mp":null,"point":null,"element":"パシップ"},
            {"name":"火炎反射","name_tw":"火炎反射","desc":"火炎反射を得る。","name_en":"Repel Fire","desc_en":"Repel Fire damage","mp":null,"point":"16","element":"パシップ"},
            {"name":"氷結反射","name_tw":"冰凍反射","desc":"氷結反射を得る。","name_en":"Repel Ice","desc_en":"Repel Ice damage","mp":null,"point":"16","element":"パシップ"},
            {"name":"電撃反射","name_tw":"電擊反射","desc":"電撃反射を得る。","name_en":"Repel Elec","desc_en":"Repel Elec damage","mp":null,"point":"16","element":"パシップ"},
            {"name":"衝撃反射","name_tw":"衝擊反射","desc":"衝撃反射を得る。","name_en":"Repel Force","desc_en":"Repel Force damage","mp":null,"point":"16","element":"パシップ"},
            {"name":"破魔反射","name_tw":"破魔反射","desc":"破魔反射を得る。","name_en":"Repel Light","desc_en":"Repel Light damage","mp":null,"point":"16","element":"パシップ"},
            {"name":"呪殺反射","name_tw":"咒殺反射","desc":"呪殺反射を得る。","name_en":"Repel Dark","desc_en":"Repel Dark damage","mp":null,"point":"16","element":"パシップ"},

            {"name":"物理吸収","name_tw":"物理吸收","desc":"物理吸収を得る。","name_en":"Drain Phys","desc_en":"Drain Phys damage","mp":null,"point":"30","element":"パシップ"},
            {"name":"火炎吸収","name_tw":"火炎吸收","desc":"火炎吸収を得る。","name_en":"Drain Fire","desc_en":"Drain Fire damage","mp":null,"point":"20","element":"パシップ"},
            {"name":"氷結吸収","name_tw":"冰凍吸收","desc":"氷結吸収を得る。","name_en":"Drain Ice","desc_en":"Drain Ice damage","mp":null,"point":"20","element":"パシップ"},
            {"name":"電撃吸収","name_tw":"電擊吸收","desc":"電撃吸収を得る。","name_en":"Drain Elec","desc_en":"Drain Elec damage","mp":null,"point":"20","element":"パシップ"},
            {"name":"破魔吸収","name_tw":"破魔吸收","desc":"破魔吸収を得る。","name_en":"Drain Light","desc_en":"Drain Light damage","mp":null,"point":"20","element":"パシップ"},
            {"name":"呪殺吸収","name_tw":"咒殺吸收","desc":"呪殺吸収を得る。","name_en":"Drain Dark","desc_en":"Drain Dark damage","mp":null,"point":"20","element":"パシップ"},

            {"name":"毒耐性","name_tw":"毒耐性","desc":"毒になる確率が50％減少する。","name_en":"Resist Poison","desc_en":"Poison resistance +50%","mp":null,"point":4,"element":"パシップ"},
            {"name":"緊縛耐性","name_tw":"束縛耐性","desc":"緊縛になる確率が50％減少する。","name_en":"Resist Bind","desc_en":"Bind resistance +50%","mp":null,"point":4,"element":"パシップ"},
            {"name":"魅了耐性","name_tw":"魅惑耐性","desc":"魅了になる確率が50％減少する。","name_en":"Resist Charm","desc_en":"Charm resistance +50%","mp":null,"point":4,"element":"パシップ"},
            {"name":"魔封耐性","name_tw":"魔封耐性","desc":"魔封になる確率が50％減少する。","name_en":"Resist Mute","desc_en":"Mute resistance +50%","mp":null,"point":4,"element":"パシップ"},
            {"name":"呪い耐性","name_tw":"詛咒耐性","desc":"呪いになる確率が50％減少する。","name_en":"Resist Curse","desc_en":"Curse resistance +50%","mp":null,"point":4,"element":"パシップ"},
            {"name":"虚弱耐性","name_tw":"虛弱耐性","desc":"虚弱になる確率が50％減少する。","name_en":"Resist Weak","desc_en":"Weak resistance +50%","mp":null,"point":4,"element":"パシップ"},

            {"name":"毒無効","name_tw":"毒無效","desc":"毒無効を得る。","name_en":"Null Poison","desc_en":"Immune to Poison","mp":null,"point":"12","element":"パシップ"},
            {"name":"緊縛無効","name_tw":"束縛無效","desc":"緊縛無効を得る。","name_en":"Null Bind","desc_en":"Immune to Bind","mp":null,"point":"12","element":"パシップ"},
            {"name":"魅了無効","name_tw":"魅惑無效","desc":"魅了無効を得る。","name_en":"Null Charm","desc_en":"Immune to Charm","mp":null,"point":"12","element":"パシップ"},
            {"name":"魔封無効","name_tw":"魔封無效","desc":"魔封無効を得る。","name_en":"Null Mute","desc_en":"Immune to Mute","mp":null,"point":"12","element":"パシップ"},
            {"name":"呪い無効","name_tw":"詛咒無效","desc":"呪い無効を得る。","name_en":"Null Curse","desc_en":"Immune to Curse","mp":null,"point":"12","element":"パシップ"},
            {"name":"虚弱無効","name_tw":"虛弱無效","desc":"虚弱無効を得る。","name_en":"Null Weak","desc_en":"Immune to Weak","mp":null,"point":"12","element":"パシップ"}
        ]
    },
    {
        name:"能力",
        name_tw:"能力",
        name_en:"Stat Passive",
        skills:[
            //速度
            {"name":"スピードスター","name_tw":"急速之星","desc":"悪魔のバトルスピードへの影響が50％増加する。","name_en":"Speedster","desc_en":"+50% to Battle Speed of this demon.","mp":null,"point":"10","element":"パシップ"},
            //命中
            {"name":"百発百中","name_tw":"百發百中","desc":"物理命中率が10％増加する。","name_en":"Good Aim","desc_en":"+10% to Phys hit rate.","mp":null,"point":4,"element":"パシップ"},
            {"name":"千発千中","name_tw":"千發千中","desc":"物理命中率が20％増加する。","name_en":"Great Aim","desc_en":"+20% to Phys hit rate.","mp":null,"point":"16","element":"パシップ"},
            {"name":"龍の反応","name_tw":"神龍呼應","desc":"物理命中率が15％増加し、物理回避率が15％増加する。","name_en":"Dragon Sense","desc_en":"+15% to Phys hit rate and +15% Phys evasion rate.","mp":null,"point":null,"element":"パシップ"},
            {"name":"涅哩底王","name_tw":"涅哩底王","desc":"物理命中率が10%増加し、１ターン目開始時、自身にリベリオンが発動する。","name_en":"Rasetsu","desc_en":"+10% to Phys hit rate. Casts Rebellion at the beginning of the 1st turn.","mp":null,"point":null,"element":"パシップ"},
            //迴避
            {"name":"見切り","name_tw":"識破","desc":"物理回避率が10％増加する。","name_en":"Dodge","desc_en":"+10% Phys evasion rate.","mp":null,"point":4,"element":"パシップ"},
            {"name":"寸分の見切り","name_tw":"分寸識破","desc":"物理回避率が20％増加する。","name_en":"Evade","desc_en":"+20% Phys evasion rate.","mp":null,"point":"16","element":"パシップ"},
            {"name":"ヴァーハナ","name_tw":"神馭騎獸","desc":"物理回避率15%増加。状態異常になる確率を30%減少。","name_en":"Vahana","desc_en":"+15% to Phys evasion rate. -30% chance of receiving status ailments.","mp":null,"point":null,"element":"パシップ"},
            {"name":"ステルス","name_tw":"隱密","desc":"物理回避率が20％増加する。さらに、この悪魔が死亡するとき、一度だけHP1で踏みとどまる。","name_en":"Stealth","desc_en":"HP will stop at 1 upon receiving the first killing blow, and increases Phys evasion rate by +20%.","mp":null,"point":null,"element":"パシップ"},
            //異命
            {"name":"乱れ狂い","name_tw":"凌亂綻放","desc":"状態異常にする確率が10％増加する。","name_en":"Madness","desc_en":"+10% chance to inflict status ailments.","mp":null,"point":8,"element":"パシップ"},
            {"name":"狂い咲き","name_tw":"狂亂綻放","desc":"状態異常にする確率が20％増加する。","name_en":"Insanity","desc_en":"+20% chance to inflict status ailments.","mp":null,"point":"24","element":"パシップ"},
            //狀防
            {"name":"地獄のマスク","name_tw":"地域口罩","desc":"状態異常になる確率が35％減少する。","name_en":"Hellish Mask","desc_en":"-35% chance of receiving status ailments.","mp":null,"point":8,"element":"パシップ"},
            {"name":"奈落のマスク","name_tw":"奈落口罩","desc":"状態異常になる確率が60％減少する。","name_en":"Infernal Mask","desc_en":"-60% chance of receiving status ailments.","mp":null,"point":"16","element":"パシップ"},
            {"name":"マレビト","name_tw":"稀人","desc":"全ての状態異常にかからなくなる。","name_en":"Mutant","desc_en":"Becomes immune to all status ailments.","mp":null,"point":null,"element":"パシップ"},
            //狀回
            {"name":"自然治癒","name_tw":"自然痊癒","desc":"状態異常の自然回復率が20％増加する。","name_en":"Fast Recovery","desc_en":"+20% to status ailment auto cure rate.","mp":null,"point":8,"element":"パシップ"},
            {"name":"超自然治癒","name_tw":"超自然痊癒","desc":"状態異常の自然回復率が30％増加する。","name_en":"Epic Recovery","desc_en":"+30% to status ailment auto cure rate.","mp":null,"point":"16","element":"パシップ"},
            //會增
            {"name":"コロシの愉悦","name_tw":"殺戮的愉悅","desc":"クリティカル率が15％増加する。","name_en":"Bloody Glee","desc_en":"+15% to Critical hit rate.","mp":null,"point":8,"element":"パシップ"},
            {"name":"ミナゴロシの愉悦","name_tw":"趕盡殺絕的愉悅","desc":"クリティカル率が25％増加する。","name_en":"Savage Glee","desc_en":"+25% to Critical hit rate.","mp":null,"point":"14","element":"パシップ"},
            //會減
            {"name":"野生の勘","name_tw":"野生直覺","desc":"自身が受ける攻撃のクリティカル率を15％減少させる。","name_en":"Wild Guess","desc_en":"-15% to Critical hit rate of damage received.","mp":null,"point":8,"element":"パシップ"},
            {"name":"野獣の勘","name_tw":"野獸直覺","desc":"自身が受ける攻撃のクリティカル率を25％減少させる。","name_en":"Wild Instinct","desc_en":"-25% to Critical hit rate of damage received.","mp":null,"point":"14","element":"パシップ"},
            //
            {"name":"一分の活泉","name_tw":"一分之活泉","desc":"最大HPが10％増加する。","name_en":"Life Bonus","desc_en":"+10% to Max HP.","mp":null,"point":3,"element":"パシップ"},
            {"name":"二分の活泉","name_tw":"二分之活泉","desc":"最大HPが20％増加する。","name_en":"Life Gain","desc_en":"+20% to Max HP.","mp":null,"point":7,"element":"パシップ"},
            {"name":"三分の活泉","name_tw":"三分之活泉","desc":"最大HPが30％増加する。","name_en":"Life Surge","desc_en":"+30% to Max HP.","mp":null,"point":"15","element":"パシップ"},
            {"name":"一分の魔脈","name_tw":"一分之魔脈","desc":"最大MPが１増加する。","name_en":"Mana Bonus","desc_en":"+1 to max MP.","mp":null,"point":8,"element":"パシップ"},
            {"name":"二分の魔脈","name_tw":"二分之魔脈","desc":"最大MPが２増加する。","name_en":"Mana Gain","desc_en":"+2 to max MP.","mp":null,"point":"15","element":"パシップ"},
            {"name":"初段の剛力","name_tw":"初段之剛力","desc":"力が５増加する。","name_en":"Strength Amp I","desc_en":"+5 to Strength.","mp":null,"point":3,"element":"パシップ"},
            {"name":"初段の賢魔","name_tw":"初段之賢魔","desc":"魔が５増加する。","name_en":"Magic Amp I","desc_en":"+5 to Magic.","mp":null,"point":3,"element":"パシップ"},
            {"name":"初段の恵体","name_tw":"初段之惠體","desc":"体が５増加する。","name_en":"Vitality Amp I","desc_en":"+5 to Vitality.","mp":null,"point":3,"element":"パシップ"},
            {"name":"初段の猛速","name_tw":"初段之猛速","desc":"速が５増加する。","name_en":"Agility Amp I","desc_en":"+5 to Agility.","mp":null,"point":3,"element":"パシップ"},
            {"name":"初段の強運","name_tw":"初段之強運","desc":"運が５増加する。","name_en":"Luck Amp I","desc_en":"+5 to Luck.","mp":null,"point":3,"element":"パシップ"},
            {"name":"二段の剛力","name_tw":"二段之剛力","desc":"力が10増加する。","name_en":"Strength Amp II","desc_en":"+10 to Strength.","mp":null,"point":13,"element":"パシップ"},
            {"name":"二段の賢魔","name_tw":"二段之賢魔","desc":"魔が10増加する。","name_en":"Magic Amp II","desc_en":"+10 to Magic.","mp":null,"point":13,"element":"パシップ"},
            {"name":"二段の恵体","name_tw":"二段之惠體","desc":"体が10増加する。","name_en":"Vitality Amp II","desc_en":"+10 to Vitality.","mp":null,"point":13,"element":"パシップ"},
            {"name":"二段の猛速","name_tw":"二段之猛速","desc":"速が10増加する。","name_en":"Agility Amp II","desc_en":"+10 to Agility.","mp":null,"point":13,"element":"パシップ"},
            {"name":"二段の強運","name_tw":"二段之強運","desc":"運が10増加する。","name_en":"Luck Amp II","desc_en":"+10 to Luck.","mp":null,"point":13,"element":"パシップ"},
            {"name":"三段の剛力","name_tw":"三段之剛力","desc":"力が15増加する。","name_en":"Strength Amp III","desc_en":"+15 to Strength.","mp":null,"point":"32","element":"パシップ"},
            {"name":"三段の賢魔","name_tw":"三段之賢魔","desc":"魔が15増加する。","name_en":"Magic Amp III","desc_en":"+15 to Magic.","mp":null,"point":"32","element":"パシップ"},
            {"name":"三段の恵体","name_tw":"三段之惠體","desc":"体が15増加する。","name_en":"Vitality Amp III","desc_en":"+15 to Vitality.","mp":null,"point":"32","element":"パシップ"},
            {"name":"三段の猛速","name_tw":"三段之猛速","desc":"速が15増加する。","name_en":"Agility Amp III","desc_en":"+15 to Agility.","mp":null,"point":"32","element":"パシップ"},
            {"name":"三段の強運","name_tw":"三段之強運","desc":"運が15増加する。","name_en":"Luck Amp III","desc_en":"+15 to Luck.","mp":null,"point":"32","element":"パシップ"}
        ]
    },
    {
        name:"追擊",
        name_tw:"追擊",
        name_en:"Damage Passive",
        skills:[
            {"name":"暗殺者","name_tw":"暗殺者","desc":"単体攻撃スキルで与えるダメージが10％増加する。","name_en":"Assassin","desc_en":"+10% to single-target attack skill damage.","mp":null,"point":8,"element":"パシップ"},
            {"name":"虐殺者","name_tw":"虐殺者","desc":"全体攻撃スキルで与えるダメージが10％増加する。","name_en":"Serial Killer","desc_en":"+10% to multiple-target attack skill damage.","mp":null,"point":8,"element":"パシップ"},
            {"name":"大虐殺者","name_tw":"大虐殺者","desc":"全体攻撃スキルで与えるダメージが20％増加する。","name_en":"Butcher","desc_en":"+20% to multiple-target attack skill damage.","mp":null,"point":"24","element":"パシップ"},
            {"name":"毒追撃","name_tw":"毒追擊","desc":"敵が毒状態のときに与えるダメージが30％増加する。","name_en":"Deadly Poison","desc_en":"+30% damage to Poisoned enemies.","mp":null,"point":13,"element":"パシップ"},
            {"name":"緊縛追撃","name_tw":"束縛追擊","desc":"敵が緊縛状態のときに与えるダメージが30％増加する。","name_en":"Deadly Bondage","desc_en":"+30% damage to Bound enemies.","mp":null,"point":13,"element":"パシップ"},
            {"name":"魅了追撃","name_tw":"魅惑追擊","desc":"敵が魅了状態のときに与えるダメージが30％増加する。","name_en":"Deadly Charm","desc_en":"+30% damage to Charmed enemies.","mp":null,"point":13,"element":"パシップ"},
            {"name":"魔封追撃","name_tw":"魔封追擊","desc":"敵が魔封状態のときに与えるダメージが30％増加する。","name_en":"Deadly Mute","desc_en":"+30% damage to Muted enemies.	Self","mp":null,"point":13,"element":"パシップ"},
            {"name":"呪い追撃","name_tw":"詛咒追擊","desc":"敵が呪い状態のときに与えるダメージが30％増加する。","name_en":"Deadly Curse","desc_en":"+30% damage to Cursed enemies.","mp":null,"point":13,"element":"パシップ"},
            {"name":"苦悶の呪印","name_tw":"苦悶咒印","desc":"呪い状態の敵に対して与えるダメージが15%増加し、呪い状態の敵から受けるダメージが15%減少する。","name_en":"Curse of Anguish","desc_en":"+15% damage to Cursed enemies. -15% damage from Cursed enemies.","mp":null,"point":null,"element":"パシップ"},
            {"name":"苦悩の呪印","name_tw":"苦惱咒印","desc":"呪い状態の敵に対して与えるダメージが10%増加し、呪い状態の敵から受けるダメージが10%減少する。","name_en":"Curse of Distress","desc_en":"+10% damage to Cursed enemies. -10% damage from Cursed enemies.","mp":null,"point":null,"element":"パシップ"},
            {"name":"狂戦士","name_tw":"狂戰士","desc":"敵に与えるダメージが10％増加し、自身が受けるダメージも20％増加する。","name_en":"Berserker","desc_en":"+10% to damage dealt, but +20% to damage received.","mp":null,"point":"18","element":"パシップ"},
            {"name":"追い打ち","name_tw":"追擊","desc":"敵の弱点をついたとき、ダメージが10％増加する。","name_en":"Back Attack","desc_en":"+10% damage when attacking the enemy's weak point.","mp":null,"point":"12","element":"パシップ"},
            {"name":"無慈悲な一撃","name_tw":"無情的一擊","desc":"敵の弱点をついたとき、ダメージが20％増加する。","name_en":"Merciless Blow","desc_en":"+20% damage when attacking the enemy's weak point.","mp":null,"point":"12","element":"パシップ"},
            {"name":"武道の素養","name_tw":"武道的素養","desc":"物理属性で与えるダメージが15％増加し、物理命中率も15％増加する。","name_en":"Arms Mastery","desc_en":"+15% to Phys damage and Phys hit rate.","mp":null,"point":null,"element":"パシップ"}
        ]
    },
    {
        name:"オート",
        name_tw:"自動",
        name_en:"Combat Passive",
        skills:[
            //反擊
            {"name":"反撃","name_tw":"反擊","desc":"敵の打撃型攻撃を受けたとき、50％の確率で物理属性の打撃型ダメージを威力50で与える。","name_en":"Counter","desc_en":"When receiving a Phys Attack, 50% chance to counter dealing Phys damage with 50 power.","mp":null,"point":6,"element":"パシップ"},
            {"name":"猛反撃","name_tw":"兇猛反擊","desc":"敵の打撃型攻撃を受けたとき、50％の確率で物理属性の打撃型ダメージを威力100で与える。","name_en":"Retaliate","desc_en":"When receiving a Phys Attack, 50% chance to counter dealing Phys damage with 100 power.","mp":null,"point":"12","element":"パシップ"},
            {"name":"デスカウンター","name_tw":"死亡反擊","desc":"敵の打撃型攻撃を受けたとき、50％の確率で物理属性の打撃型ダメージを威力150で与える。","name_en":"Death Counter","desc_en":"When receiving a Phys Attack, 50% chance to counter dealing Phys damage with 150 power.","mp":null,"point":"18","element":"パシップ"},
            {"name":"狂乱の陶酔","name_tw":"狂亂陶醉","desc":"敵の打撃型攻撃を受けた時、攻撃してきた敵を基礎確率50%で魅了状態にする。","name_en":"Euphoric Frenzy","desc_en":"50% chance to Charm the assailant when receiving a Phys Attack.","mp":null,"point":null,"element":"パシップ"},
            {"name":"ヤシュチェ","name_tw":"宇宙之樹","desc":"このスキルを持っている悪魔が敵ターンに死亡したとき、攻撃してきた相手に万能属性の魔法型ダメージを威力100で与え、死亡時に踏みとどまるスキルを無視して100%の確率で即死させる。ただし、全滅時にはこの効果は発動しない。","name_en":"Yaxche","desc_en":"When downed during the enemy turn, inflicts Almighty (Power:100) damage to the attacker, with 100% chance to inflict Mortal. Nullifies all death prevention skills. Won't activate when your party is wiped out.","mp":null,"point":null,"element":"パシップ"},
            //防禦
            {"name":"タルタロスの牢番","name_tw":"塔爾塔洛斯獄卒","desc":"このスキルを持っている悪魔が生きている間、味方全体は次の効果を発揮する。「全体攻撃スキルで自身が受けるダメージが15%減少する。」","name_en":"Guards of Tartarus","desc_en":"While the demon with this skill is alive, all party members will receive the following effect: Reduces damage received by 15% when the attacker attacks all party members.","mp":null,"point":null,"element":"パシップ"},
            //防死
            {"name":"食いしばり","name_tw":"強忍","desc":"この悪魔が死亡するとき、一度だけHP1で踏みとどまる。","name_en":"Endure","desc_en":"HP stops at 1 HP upon receiving the first killing blow.","mp":null,"point":6,"element":"パシップ"},
            {"name":"不屈の闘志","name_tw":"不屈的鬥志","desc":"この悪魔が死亡するとき、一度だけHPが200回復する。","name_en":"Enduring Soul","desc_en":"Heals 200 HP upon receiving the first killing blow.","mp":null,"point":"18","element":"パシップ"},
            {"name":"アヴァターラ","name_tw":"降世化身","desc":"この悪魔が死亡するとき、一度だけHPが500回復する。ウェーブをまたぐとき、HPが50%回復する。","name_en":"Avatar","desc_en":"Heals 200 HP upon receiving the first killing blow. Heals 40% HP when clearing a wave.","mp":null,"point":null,"element":"パシップ"},
            //自回
            {"name":"勝利の息吹","name_tw":"勝利的氣息","desc":"ウェーブをまたぐとき、HPが30％回復する。","name_en":"Life Aid","desc_en":"Heals 30% HP when clearing a wave.","mp":null,"point":6,"element":"パシップ"},
            {"name":"勝利のチャクラ","name_tw":"勝利的查克拉","desc":"ウェーブをまたぐとき、MPが10回復する。","name_en":"Mana Aid","desc_en":"Recovers 10 MP when clearing a wave.","mp":null,"point":"12","element":"パシップ"},
            {"name":"無限のチャクラ","name_tw":"無限的查克拉","desc":"MPの自然回復量が１増加する。","name_en":"Infinite Chakra","desc_en":"Increases naturally recovered MP by 1 MP.","mp":null,"point":"18","element":"パシップ"},
            {"name":"穴巣始","name_tw":"冬眠儀式","desc":"このスキルを持っている悪魔が生きている間、味方全体は次の効果を発揮する。 「状態異常の自然回復率が20%増加する。」","name_en":"Arcane Ritual","desc_en":"While the demon with this skill is alive, all party members will receive the following effect: 20% increase in status ailment auto cure rate.","mp":null,"point":null,"element":"パシップ"},
            //反射
            {"name":"テトラカシフト","name_tw":"提特拉康脈動","desc":"後攻でバトルを開始したとき、テトラカーンが発動する。","name_en":"Tetra Shift","desc_en":"Casts Tetrakarn at the beginning of a battle if the enemy attacks first.","mp":null,"point":"18","element":"パシップ"},
            {"name":"マカラカシフト","name_tw":"瑪卡拉康脈動","desc":"後攻でバトルを開始したとき、マカラカーンが発動する。","name_en":"Makara Shift","desc_en":"Casts Makarakarn at the beginning of a battle if the enemy attacks first.","mp":null,"point":"18","element":"パシップ"},
            {"name":"貫反の霊圧","name_tw":"貫反靈壓","desc":'',"name_en":"Repel Pierce","desc_en":"While the demon with this skill is alive, Pierce will have no effect on any party member that can repel the attribute they are attacked with.","mp":null,"point":null,"element":"パシップ"},
            //貫通
            {"name":"金剛蔵王","name_tw":"金剛蔵王","desc":"このスキルを持っている悪魔が生きている間、味方全体は次の効果を発揮する。「会心状態の場合、物理貫通を得る。」","name_en":"Kongo Zaou","desc_en":"All party members in the state of Might gain Phys Pierce while the demon with this skill is alive.","mp":null,"point":null,"element":"パシップ"},
            {"name":"猛将の逆鱗","name_tw":"猛將的逆鱗","desc":"物理貫通を得る。敵の打撃型攻撃を受けたとき、100%の確率で物理属性の打撃型ダメージを威力100で与える。後攻でバトルを開始したとき、敵のプレスターンアイコンを1つ減少させる。プレスターンアイコンを減少させる効果は合計2つまでしか発動しない。","name_en":"Warlord's Wrath","desc_en":"Adds Phys Pierce. Reduces 1 enemy Press Turn Icon at the beginning of a battle if the enemy attacks first. Only up to 2 Press Turn Icons can be reduced by skills or effects. When receiving a Phys Attack, 100% chance to counter dealing Phys damage.","mp":null,"point":null,"element":"パシップ"},
            //貫吸
            {"name":"貫吸の気魄","name_tw":"貫吸之氣魄","desc":"このスキルを持っている悪魔が生きている間、味方全員の属性吸収が貫通に対しても効果を発揮する。","name_en":"Drain Pierce","desc_en":"While the demon with this skill is alive, Pierce will have no effect on any party member that can drain the attribute they are attacked with.","mp":null,"point":null,"element":"パシップ"},
            //強化
            {"name":"黄泉津大神","name_tw":"黃泉津大神","desc":"このスキルを持っている悪魔が生きている間、味方全体は次の効果を発揮する。 「電撃属性、呪殺属性で与えるダメージが10%増加する。」","name_en":"Yomotsu Okami","desc_en":"While the demon with this skill is alive, all party members gain +10% damage to Elec and Dark attacks.","mp":null,"point":null,"element":"パシップ"},
            {"name":"死が奏であう劇場","name_tw":"死亡合奏劇場","desc":"2ターンごとの自分のターン開始時、味方のプレスターンアイコンが1つ増加し、このスキルを持っている悪魔が敵に与えるダメージが10%増加する。（最大50%まで）","name_en":"Harmonious Death","desc_en":"At the beginning of every second turn, damage dealt by the demon with this skill will increase by 10% (up to 50%) and all party members receive 1 additional Press Turn Icon.","mp":null,"point":null,"element":"パシップ"},
            //增強
            {"name":"タルカオート","name_tw":"自動塔爾卡","desc":"１ターン目開始時、タルカジャが発動する。","name_en":"Auto-Taraka","desc_en":"Casts Tarukaja at the beginning of the 1st turn.","mp":null,"point":"12","element":"パシップ"},
            {"name":"ラクカオート","name_tw":"自動拉庫卡","desc":"１ターン目開始時、ラクカジャが発動する。","name_en":"Auto-Rakuga","desc_en":"Casts Rakukaja at the beginning of the 1st turn.","mp":null,"point":"12","element":"パシップ"},
            {"name":"スクカオート","name_tw":"自動斯庫卡","desc":"１ターン目開始時、スクカジャが発動する。","name_en":"Auto-Sukuka","desc_en":"Casts Sukukaja at the beginning of the 1st turn.","mp":null,"point":"12","element":"パシップ"},
            {"name":"タルンダオート","name_tw":"自動塔倫達","desc":"１ターン目開始時、タルンダが発動する。","name_en":"Auto-Tarunda","desc_en":"Casts Tarunda at the beginning of the 1st turn.","mp":null,"point":"12","element":"パシップ"},
            {"name":"ラクンダオート","name_tw":"自動拉昆達","desc":"１ターン目開始時、ラクンダが発動する。","name_en":"Auto-Rakunda","desc_en":"Casts Rakunda at the beginning of the 1st turn.","mp":null,"point":"12","element":"パシップ"},
            {"name":"スクンダオート","name_tw":"自動斯坤達","desc":"１ターン目開始時、スクンダが発動する。","name_en":"Auto-Sukunda","desc_en":"Casts Sukunda at the beginning of the 1st turn.","mp":null,"point":"12","element":"パシップ"},
            {"name":"メスラムタエア","name_tw":"美斯朗塔耶亞","desc":"物理命中率が20%増加し、敵が毒状態になったとき、自身にリベリオンが発動する。","name_en":"Meslamtaea","desc_en":"Increases AC by 20%, and enters a state of Rebellion when the enemy is Poisoned.","mp":null,"point":null,"element":"パシップ"},
            //誘惑
            {"name":"女帝のリビドー","name_tw":"女帝狂慾","desc":"敵が魅了状態のときに与えるダメージが25%増加し、自分の1ターン目開始時、敵全体を基礎確率30%で魅了状態にする。","name_en":"Death Lust","desc_en":"+25% damage to Charmed enemies. Has a 30% to Charm all enemies at the beginning of the 1st turn.","mp":null,"point":'',"element":"パシップ"},
            {"name":"猟奇的な愛情","name_tw":"殘虐的愛情","desc":"敵が魅了状態になったとき、3ターンの間、敵全体の防御力を20%減少させる。","name_en":"Sass","desc_en":"When an enemy is Charmed, reduces all enemy's DEF by 20%. (3 turns)","mp":null,"point":'',"element":"パシップ"},
            //壓制
            {"name":"威圧の構え","name_tw":"威攝姿態","desc":"後攻でバトルを開始したとき、敵のプレスターンアイコンを１つ減少させる。","name_en":"Intimidating Stance","desc_en":"Reduces 1 enemy Press Turn at the beginning of a battle if the enemy attacks first. Only up to 2 Press Turn Icons can be reduced by skills or effects.","mp":null,"point":"21","element":"パシップ"},
            {"name":"制圧の構え：吸","name_tw":"威攝姿態:吸","desc":"このスキルを持っている悪魔が生きている間、味方の属性吸収が発動した際、敵のプレスターンアイコンを1つ減少させる。","name_en":"Suppress Stance Drain","desc_en":"As long as the demon who has this skill is alive, the enemy loses an extra Press Turn Icon every time you drain their attack.","mp":null,"point":null,"element":"パシップ"},
            {"name":"富の信仰","name_tw":'',"desc":"最大HPが10%増加する。敵のスキル効果によってこちらのプレスターンアイコンが減少するたび、味方全体のMPを1回復する。","name_en":"Faith in Wealth","desc_en":"Increases max HP by 10%. Recover 1 MP every time your Press Turn Icon decreases due to enemy skills.","mp":null,"point":null,"element":"パシップ"},
            {"name":"次はお前だ","name_tw":"下個就是你","desc":"このスキルを持っている悪魔が単体攻撃で敵を死亡させた場合、敵が復活したとき、Lv.1のカシマレイコとして復活する。","name_en":"You're Next","desc_en":"If the demon with this skill kills an enemy with a single target attack, and that enemy is revived, they will come back as a Lv. 1 Reiko Kashima.","mp":null,"point":null,"element":"パシップ"},
            {"name":"ザクロの制約","name_tw":"石榴制約","desc":"このスキルを持っている悪魔が生きている間、敵に対して次の効果を発揮する。 「復活した際にHP1で復活する」","name_en":"Fruit of the Dead","desc_en":"While the demon with this skill is alive, any enemy demon that is revived will only have 1 HP.","mp":null,"point":null,"element":"パシップ"},
            //節省
            {"name":"トリックスター","name_tw":"狡計之星","desc":"敵の弱点をついたとき、20％の確率でプレスターンアイコンを消費しない。","name_en":"Trickster","desc_en":"20% chance to avoid using Press Turn Icons when attacking the enemy's weak point.","mp":null,"point":null,"element":"パシップ"},
            {"name":"月の加護","name_tw":"月之庇佑","desc":"MPを消費するとき、消費するMPが１減少する。","name_en":"Lunar Blessing","desc_en":"Reduces consumed MP by 1 MP.","mp":null,"point":null,"element":"パシップ"},
            //
            {"name":"バビロニアの疫病","name_tw":"巴比倫尼亞疫病","desc":"敵全体のバリア状態を解除した後、敵全体を基礎確率80%で虚弱状態にする。","name_en":"Plague of Babylon","desc_en":"80% chance to inflict Weak on all enemies after removing Barriers from all enemies.","mp":null,"point":null,"element":"パシップ"},
            {"name":"冥府の理","name_tw":"冥府之理","desc":"このスキルを持っている悪魔が生きている間、味方全体が弱点をつかれた時のボーナスターン発生を無効化する。","name_en":"Law of Hell","desc_en":"As long as the demon with this skill is alive, no bonus turn will be granted when a party member's weak point is attacked.","mp":null,"point":null,"element":"パシップ"},
            {"name":"ヘルズゲート","name_tw":"地獄之門","desc":"このスキルを持っている悪魔が生きている間、味方全体は次の効果を発揮する。 「味方全体の弱点1つにつき、全体攻撃スキルで自身が受けるダメージが3%減少する。（最大30%まで）」","name_en":"Hell's Gate","desc_en":"While the demon with this skill is alive, all party members will receive the following effect: For every Weak attribute, all party members will receive 3% less multiple-target attack damage. (Max reduction: 30%)","mp":null,"point":null,"element":"パシップ"},
            {"name":"黒い夜の霧","name_tw":"暗夜濃霧","desc":"敵が虚弱状態になったとき、3ターンの間、敵全体の回避と命中率を20%減少させ、敵全体を基礎確率100%で毒状態にする。","name_en":"Fog of Death","desc_en":"When an enemy is Weakened, reduces all enemy EV/AC by 20% (3 turns) and 100% chance to inflict Poison.","mp":null,"point":null,"element":"パシップ"},
            {"name":"ヘルヘイムの叫び","name_tw":"冥界吶喊","desc":"このスキルを持っている悪魔が敵を倒したとき、3ターンの間、敵全体の攻撃力・防御力をそれぞれ20%ずつ減少させる。","name_en":"Call to Helheim","desc_en":"When the demon with this skill downs an enemy, reduces all enemy ATK and DEF by 20%. (3 turns)","mp":null,"point":null,"element":"パシップ"}
        ]
    },
    {
        name:"特殊",
        name_tw:"特殊",
        name_en:"Special Passive",
        skills:[
            {"name":"コウウン","name_tw":"幸運","desc":"D×2とパーティ悪魔がバトルで獲得する経験値を20％、バトルで獲得するマッカを20％増加させる。","name_en":"Luck","desc_en":"Increases Exp gained by Dx2 and all party members by 20% and Macca obtained during battle by 20%.","mp":null,"point":null,"element":"パシップ"},
            {"name":"毒床歩き","name_tw":"漫步雷池","desc":"アウラゲート内のダメージ床のダメージが25％減少する。","name_en":"Dmg Panel V I","desc_en":"-25% to damage received from Damage Panels in the Aura Gate.","mp":null,"point":2,"element":"パシップ"},
            {"name":"毒床渡り","name_tw":"闊步雷池","desc":"アウラゲート内のダメージ床のダメージが50％減少する。","name_en":"Dmg Panel V II","desc_en":"-50% to damage received from Damage Panels in the Aura Gate.","mp":null,"point":4,"element":"パシップ"},
            {"name":"ワナフーリ","name_tw":"陷阱弱化","desc":"アウラゲート内でダメージ床のダメージが30％減少し、ダークゾーンの効果を無効にする。","name_en":"Trap Free","desc_en":"-30% to damage received from Damage Panels in the Aura Gate, and nullifies Dark Zone effects.","mp":null,"point":null,"element":"パシップ"},
            {"name":"毒床無効","name_tw":"雷池無懼","desc":"アウラゲート内のダメージ床のダメージを無効にする。","name_en":"Dmg Panel Immunity","desc_en":"Nullifies Damage Panels in the Aura Gate.","mp":null,"point":8,"element":"パシップ"},
            {"name":"ダークゾーン無効","name_tw":"黑暗區域無效","desc":"アウラゲート内のダークゾーンの効果を無効にする。","name_en":"Void Dark Zones","desc_en":"Nullifies Dark Zone effects in the Aura Gate.","mp":null,"point":8,"element":"パシップ"},
            {"name":"ナイトフィーバー","name_tw":"狂歡之夜","desc":"バトルで獲得するマッカを5%増加させる。","name_en":"Nightlife","desc_en":"Increases Macca obtained in battle by 5%.","mp":null,"point":null,"element":"パシップ"}
        ]
    }
];


//////////////////////
// i18n
//////////////////////

const messages = {
    en: {
      message: {
        fusion: 'Fusion',
        skill:'Skill',
        reverse:'Reverse',
        normal:'Normal',
        reverse_fusion: 'Reverse Fusion',
        normal_fusion: 'Normal Fusion',
        devil: 'Demon',
        setting:'Setting',
        language: 'Language',
        downgrade_fusion: 'Downgrade Fusion',
        prevent_unload:'Prevent Unload',
        allow: 'Allow',
        deny: 'Deny',
        search:'Search',
        element:'Element',
        inherit:'Transfer',
        description:'Description',
        cost:'Cost',
        cost_others:'Cost(Others)',
        cost_pure:'Cost(Clear)',
        fusion_mag:'Fusion',
        fusion_mag_others:'Fusion(Others)',
        fusion_mag_pure:'Fusion(Clear)',
        possess:'Possess',
        common_skills:'Common Skills'
      },
      devil:{
        attack:'Attack',
        support:'Support',
        heal:'Heal'
      },
      archetype:{
        common:'Common',
        aragami:'Aragami',
        protector:'Protector',
        psychic:'Psychic',
        elementalist:'Elementalist'
      },
      element:{
        phys:'Phys',
        fire:'Fire',
        ice:'Ice',
        elec:'Elec',
        force:'Force',
        light:'Light',
        dark:'Dark',
        wk:'Wk',
        rs:'Rs',
        nu:'Nu',
        rp:'Rp',
        dr:'Dr'
      }
    },
    ja: {
      message: {
        fusion:'合体',
        skill:'スキル',
        reverse:'逆引き',
        normal:'通常',
        reverse_fusion: '逆引き合体',
        normal_fusion: '通常合体',
        devil: '仲魔',
        setting:'環境',
        language: '言語',
        downgrade_fusion: 'ダウングレイド合体',
        prevent_unload:'アンロードを防止する',
        allow: '許可する',
        deny: '許可しない',
        search:'探す',
        element:'属性',
        inherit:'継承',
        description:'説明',
        cost:'コスト',
        cost_others:'コスト(他)',
        cost_pure:'コスト(素)',
        fusion_mag:'合体料',
        fusion_mag_others:'合体料(他)',
        fusion_mag_pure:'合体料(素)',
        possess:'持有',
        common_skills:'共通スキル'
      },
      devil:{
        attack:'攻擊',
        support:'支援',
        heal:'回復'
      },
      archetype:{
        common:'素体',
        aragami:'荒神',
        protector:'加護',
        psychic:'異能',
        elementalist:'防魔'
      },
      element:{
        phys:'物',
        fire:'火',
        ice:'冰',
        elec:'電',
        force:'衝',
        light:'破',
        dark:'咒',
        wk:'弱',
        rs:'耐',
        nu:'無',
        rp:'反',
        dr:'吸'
      }
    },
    tw: {
        message:{
            fusion:'合體',
            skill:'技能',
            reverse:'逆向',
            normal:'順向',
            reverse_fusion: '逆向合體',
            normal_fusion: '順向合體',
            devil: '惡魔',
            setting:'設定',
            language: '語言',
            downgrade_fusion: '降階合體',
            prevent_unload:'防止換頁',
            allow:'允許',
            deny:'不允許',
            search:'查詢',
            element:'屬性',
            inherit:'繼承',
            description:'說明',
            cost:'成本',
            cost_others:'成本(他)',
            cost_pure:'成本(素)',
            fusion_mag:'合體費',
            fusion_mag_others:'合體費(他)',
            fusion_mag_pure:'合體費(素)',
            possess:'持有',
            common_skills:'共通技能'
        },
        devil:{
            attack:'攻擊',
            support:'支援',
            heal:'回復'
          },
        archetype:{
            common:'素體',
            aragami:'荒神',
            protector:'加護',
            psychic:'異能',
            elementalist:'防魔'
          },
          element:{
            phys:'物',
            fire:'火',
            ice:'冰',
            elec:'電',
            force:'衝',
            light:'破',
            dark:'咒',
            wk:'弱',
            rs:'耐',
            nu:'無',
            rp:'反',
            dr:'吸'
        }
    }
};


//////////////////////
// Devil Class
//////////////////////

var Devil = function(devil){
    
    this.name = devil.name;
    this.name_tw = devil.name_tw;
    this.name_en = devil.name_en;
    this.rarity = devil.rarity;
    this.grade = devil.grade;
    this.icon = devil.icon;
    this.elements = devil.elements;
    this.skills = devil.skills;
    this.skill4 = devil.skill4;
    this.skill5 = devil.skill5;
    this.type = devil.type;
    this.max = null;
    this.min = null;
    this.race = null;
    this.cost = null;
    this.cost_pure = null;
    this.costs = [null,null,null,null,null,null];
    this.pure_costs = [null,null,null,null,null,null];
};

Devil.prototype.showName = function(){
    
    var name;
            
    switch(i18n.locale){
        case 'ja': name = this.name; break;
        case 'tw': name = this.name_tw; break;
        case 'en': name = this.name_en; break;
        default: name = this.name;
    }
    if(!name)
        name = this.name;

    return name;
}

Devil.prototype.showGrade = function(){
    
    return 'G.'+this.grade;
}

Devil.prototype.showRarity = function(){

    var rarity = '';
    for(var i=0; i<this.rarity;i++)
        rarity += '★';
    return rarity;
}
Devil.prototype.showCost = function(rarity){
/*
    var cost = this.costs[rarity];
*/

    return (this.cost/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
Devil.prototype.showCostPure = function(rarity){
    
    /*
    var cost = this.pure_costs[rarity];
    */

    return (this.cost_pure/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
Devil.prototype.fission_formulas = function(){
    
    var devil = this;
    
    var formulas = [];
  
    this.race.formulas.forEach(function(f){

        var r1 = f[0];
        var r2 = f[1];

        var boms = [];

        r1.devils.forEach(function(d1){
            r2.devils.forEach(function(d2){

                var bom = DevilBom.bom(devil,d1,d2);

                if(bom)
                    boms.push(bom);
            });
        });

        boms.sort(function(bom1,bom2){
            return bom1.order - bom2.order;
        });

        if(boms.length>0){
            formulas.push({
                'name': r1.showName() + ' x ' + r2.showName(),
                'boms':boms
            });
        }

    });

    return formulas;
}

Devil.prototype.fusion_formulas = function(){

    var d1 = this;
    var multi_formulas = [];

    // Target Race Loop
    this.race.usage.forEach(function(u){

        // Target Devil Loop
        u.target.devils.forEach(function(target){

            var formulas = [];
           
            u.r2s.forEach(function(r2){

                var boms = [];

                // Pair Devil Loop
                r2.devils.forEach(function(d2){

                    var bom = DevilBom.bom(target, d1, d2);

                    if(bom)
                        boms.push(bom)
                });

                boms.sort(function(c1,c2){
                    return c1.order - c2.order;
                });

                if(boms.length>0){

                    formulas.push({
                        'name': d1.race.showName() + ' x ' + r2.showName(),
                        'boms': boms
                    });
                }
            });
            
            if(formulas.length>0){
                multi_formulas.push({
                    devil:target,
                    formulas:formulas
                });
            }
        });

    });

    return multi_formulas;
}

////////////////////
// Race Class
///////////////////

var Race = function(race){
    
    this.name = race.name;
    this.name_tw = race.name_tw;
    this.name_en = race.name_en;
    this.highlight = race.highlight;
    this.formulas = race.formulas;
    this.devils = race.devils;
}

Race.prototype.showName = function(){

    var name;
            
    switch(i18n.locale){
        case 'ja': name = this.name; break;
        case 'tw': name = this.name_tw; break;
        case 'en': name = this.name_en; break;
        default: name = this.name;
    }

    return name ? name : this.name;
}

////////////////////
// Skill Class
////////////////////

var Skill = function(skill){

    this.name = skill.name;
    this.name_tw = skill.name_tw==null ? '' : skill.name_tw;
    this.name_en = skill.name_en==null ? '' : skill.name_en;
    this.desc = skill.desc==null ? '' : skill.desc;
    this.desc_tw = skill.desc_tw==null ? '' : skill.desc_tw;
    this.desc_en = skill.desc_en==null ? '' : skill.desc_en;
    this.mp = skill.mp==null ? '' : skill.mp;
    this.point = skill.point == null ? '' : skill.point;
    this.element = skill.element == null ? '' : skill.element;
    this.type = null;
    this.devils = [];
}
Skill.prototype.showName = function(){
    
    switch(i18n.locale){
        case 'ja': name = this.name; break;
        case 'tw': name = this.name_tw; break;
        case 'en': name = this.name_en; break;
        default: name = this.name;
    }
    if(!name)
        name = this.name;
    if(!name)
        name = '--------------------';
    return name;
}
Skill.prototype.showDesc = function(){
   
    switch(i18n.locale){
        case 'ja': desc = this.desc; break;
        case 'tw': desc = this.desc_tw; break;
        case 'en': desc = this.desc_en; break;
        default: desc = this.desc;
    }
    if(!desc)
        desc = this.desc;
    if(!desc)
        desc = '';
   
    return desc;
}
Skill.prototype.showHint = function(){
    
    if(!this.name)
        return ''

    var hint = i18n.t('message.element') 
    + ': '
    + (this.type ? this.type.showName():'')
    + ' MP: '
    + this.mp+' ' 
    + (this.point ? i18n.t('message.inherit')+ ': '+this.point : '') 
    +'\n'
    +this.showDesc();

    return hint;
}
Skill.prototype.addDevil = function(new_devil){
    
    var devils = this.devils.filter(function(devil){
        return devil.name == new_devil.name;
    });

    if(devils.length==0)
        this.devils.push(new_devil);
}

////////////////////
// Skill Type Class
////////////////////

var SkillType = function(type){

    this.name = type.name;
    this.name_tw = type.name_tw == null ? '' : type.name_tw;
    this.name_en = type.name_en == null ? '' : type.name_en;
    this.skills = type.skills;
}
SkillType.prototype.showName = function(){
    
    switch(i18n.locale){
        case 'ja': name = this.name; break;
        case 'tw': name = this.name_tw; break;
        case 'en': name = this.name_en; break;
        default: name = this.name;
    }
    if(!name)
        name = this.name;
    if(!name)
        name = '';
    return name;
}
////////////////////
// Devil Bom Class
////////////////////

function DevilBom(devil, d1, d2){

    var child1 = d1==null?null:new DevilBom(d1);
    var child2 = d2==null?null:new DevilBom(d2);

    if(child1) child1.parent = this;
    if(child2) child2.parent = this;

    this.devil = devil;
    this.parent = null;
    this.child1 = child1;
    this.child2 = child2;
    this.order = 0;
    this.upgrade = false;
    this.downgrade = false;
    this.mag = 0;
    this.mag_pure = 0;
    this.collapse = false;

    this.init();
}

DevilBom.prototype.set = function(bom){

    bom.child1.parent = this;
    bom.child2.parent = this;

    this.child1 = bom.child1;
    this.child2 = bom.child2;
    this.order = bom.order;
    this.upgrade = bom.upgrade;
    this.downgrade = bom.downgrade;
    this.mag = bom.mag;
    this.mag_pure = bom.mag_pure;
}

DevilBom.prototype.unset = function(){

    this.child1 = null;
    this.child2 = null;
    this.order = 0;
    this.upgrade = false;
    this.downgrade = false;
    this.mag = 0;
    this.mag_pure = 0;
}

DevilBom.prototype.init = function(){

    if(this.child1 && this.child2){

        var devil = this.devil;
        var d1 = this.child1.devil;
        var d2 = this.child2.devil;

        this.order = (d1.rarity>d2.rarity) 
            ? (d1.rarity*10+d2.rarity) 
            : (d2.rarity*10+d1.rarity);
        this.upgrade = (d1.rarity < devil.rarity && d2.rarity < devil.rarity);
        this.downgrade = (d1.rarity > devil.rarity || d2.rarity > devil.rarity);

        var g = (d1.grade + d2.grade)/2;
        var A = B = 0;
        var r = (devil.rarity*2)-d1.rarity-d2.rarity;

        A = [
            //-1 ~ 4
            [5,     5,          5,          5,          5,          5],
            [5,     5,          25,         50,         0,          0],
            [250,   500,        2500,       5000,       5200,       5400],
            [0,     6000,       150000,     300000,     320000,     0],
            [0,     60000,      1500000,    3000000,    4200000,    0]
        ][devil.rarity-1][r+1];

        B = [0,0,0.3,0.45,60,75,1080,1260,14400,16200][Math.floor(devil.grade/10)];

        var mag = A + (devil.grade-g) * B;
        
        this.mag = Math.floor(mag);
       
        if(devil.rarity==5)         this.mag_pure = Math.floor(mag*0.7);
        else if(devil.rarity==4)    this.mag_pure = Math.floor(mag*0.5);
        else                        this.mag_pure = this.mag;

        if( A==0 ){
            this.mag = 0;
            this.mag_pure = 0;
        }
    }
    else{
        this.order = 0;
        this.upgrade = false;
        this.downgrade = false;
        this.mag = 0;
        this.mag_pure = 0;
    }
};

DevilBom.prototype.showMag = function(){

    return (this.mag/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


DevilBom.prototype.showMagPure = function(){

    return (this.mag_pure/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

DevilBom.prototype.caculate_mag = function(layer){

    var mag = this.mag;
    var mag1 = (this.child1?this.child1.caculate_mag(layer+1):0);
    var mag2 = (this.child2?this.child2.caculate_mag(layer+1):0);
    
    if(layer==1){
        if(mag1>mag2){  mag += mag1 + (this.child2?this.child2.caculate_mag_pure():0);   }
        else{           mag += (this.child1?this.child1.caculate_mag_pure():0) + mag2;   }
    }
    else{               mag += mag1 + mag2;                                   }

    return mag;
};

DevilBom.prototype.caculate_mag_pure = function(){

    return this.mag_pure 
        + (this.child1?this.child1.caculate_mag_pure():0)
        + (this.child2?this.child2.caculate_mag_pure():0);
};

DevilBom.prototype.showTotalMag = function(){

    var mag = this.caculate_mag(1);

    return (mag/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

DevilBom.prototype.showTotalMagPure = function(){

    var mag_pure = this.caculate_mag_pure();

    return (mag_pure/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

DevilBom.prototype.getCost = function(rarity){

    var d1 = this.child1.devil;
    var d2 = this.child2.devil;

    var cost1_p = d1.pure_costs[rarity];
    var cost1_x = d1.costs[rarity];
    var cost2_p = d2.pure_costs[rarity];
    var cost2_x = d2.costs[rarity];

    if(cost1_p==null||cost1_x==null||cost2_p==null||cost2_x==null)
        return null;

    if(d1.rarity <= rarity){
        cost1_p = 0;
        cost1_x = 0;
    }

    if(d2.rarity <= rarity){
        cost2_p = 0;
        cost2_x = 0;
    }

    var cost1 = cost1_x + cost2_p;
    var cost2 = cost1_p + cost2_x;

    return (cost1 > cost2 ? cost2 : cost1) + this.mag;

};

DevilBom.prototype.getCostPure = function(rarity){

    var d1 = this.child1.devil;
    var d2 = this.child2.devil;

    var cost1 = d1.pure_costs[rarity];
    var cost2 = d2.pure_costs[rarity];

    if(cost1==null||cost2==null)
        return null;

    return (d1.rarity > rarity ? cost1 : 0) 
        + (d2.rarity > rarity ? cost2 : 0)
        + this.mag_pure;
};

DevilBom.bom = function(devil, d1, d2){

    var g = (d1.grade + d2.grade)/2;

    if( ! (devil.min <= g && g < devil.max ) ){
        return null;
    }

    return new DevilBom(devil, d1, d2);
}

/////////////////////////////
// Digital Devil Data Class
/////////////////////////////

function Resource(ddd, sss){
    
    this.races = [];
    this.devils = [];
    this.skillTypes = [];
    this.skills = [];
    
    var race_data = {};
    var devil_data = {};
    var devil_array = [];
    var type_data = {};
    var skill_data = {};
    var skill_array = [];

    sss = sss.map(function(type){

        type = new SkillType(type);
        type_data[type.name] = type;

        type.skills = type.skills.map(function(skill){
            skill = new Skill(skill);
            skill.type = type;
            skill_data[skill.name] = skill;
            skill_array.push(skill);
            return skill;
        });
        return type;
    });

    //create race_data
    //convert race to Race Class
    //convert devil to Devil Class
    ddd = ddd.map(function(race){
        
        race.devils = race.devils.map(function(devil){
            return new Devil(devil);
        });
        race_obj = new Race(race)
        race_data[race.name] = race_obj;
        return race_obj;
    });

    //replace formula's race from text to object
    ddd.forEach(function(race){

        race.formulas.forEach(function(formula){
            formula[0] = race_data[formula[0]];
            formula[1] = race_data[formula[1]];
        });
    });

    //create devil_data
    //convert devil's skill from text to object
    ddd.forEach(function(r1){

        r1.devils.forEach(function(devil, index){

            devil.race = r1;
            devil.max = devil.grade;
            devil.min = (index==r1.devils.length-1 ? 0 : r1.devils[index+1].grade);

            if(devil.skills){
                devil.skills = devil.skills.map(function(name){
                    var skill = skill_data[name];
                    if(skill){
                        skill.addDevil(devil);
                    }
                    return skill ? skill : new Skill({name:name});
                });
            }
            if(devil.skill4){
                devil.skill4 = devil.skill4.map(function(name){
                    var skill = skill_data[name];
                    if(skill){
                        skill.addDevil(devil);
                    }
                    return skill ? skill : new Skill({name:name});
                });
            }
            if(devil.skill5){
                devil.skill5 = devil.skill5.map(function(name){
                    var skill = skill_data[name];
                    if(skill){
                        skill.addDevil(devil);
                    }
                    return skill ? skill : new Skill({name:name});
                });
            }

            devil_array.push(devil);
            devil_data[devil.name] = devil;
        });

        var usage_temp = {};

        ddd.forEach(function(target){

            target.formulas.forEach(function(f){
                
                var r2 = null;

                if(f[0].name==r1.name){
                    r2 = f[1];
                }
                if(f[1].name==r1.name){
                    r2 = f[0];
                }
                if(r2){

                    if(! (target.name in usage_temp)){
                        usage_temp[target.name] = [];
                    }

                    usage_temp[target.name].push(r2);
                }
            });
        });

        r1.usage = [];

        for(name in usage_temp){
            r1.usage.push({
                target:race_data[name],
                r2s:usage_temp[name]
            })
        }
    });

    devil_array.sort(function(d1,d2){
        if(d1.grade==d2.grad2)  return 0;
        return d1.grade > d2.grade ? 1 : -1;
    });

    //create fission and fusion options

    devil_array.forEach(function(devil){
        devil.fission_boms = [];
        devil.fission_options = devil.fission_formulas();
        devil.fission_options.forEach(function(option){
             devil.fission_boms = devil.fission_boms.concat(option.boms);
        });
    });

    var break_limit=10;
    var all_pass = false;

    while( break_limit-- > 0 && !all_pass){

        all_pass = true;
        
        devil_array.forEach(function(devil){

            var pass = true;

            for(var rarity=1; rarity<=5; rarity++){

                var cost = null;
                var pure_cost = null;

                if(devil.fission_boms.length){
                    
                    devil.fission_boms.forEach(function(bom){

                        var l_pure_cost = bom.getCostPure(rarity);
    
                        if(l_pure_cost==null) pass = false;
                        else if(pure_cost==null) pure_cost = l_pure_cost;
                        else pure_cost = pure_cost > l_pure_cost ? l_pure_cost : pure_cost;

                        var l_cost = bom.getCost(rarity);
    
                        if(l_cost==null)    pass = false;
                        else if(cost==null) cost = l_cost;
                        else                cost = cost > l_cost ? l_cost : cost;
                    });
    
                    if(devil.rarity > rarity){
    
                        if(pure_cost!=null && devil.pure_costs[rarity] != pure_cost){
                            devil.pure_costs[rarity] = pure_cost;
                            pass = false;
                        }

                        if(cost!=null && devil.costs[rarity] != cost){
                            devil.costs[rarity] = cost;
                            pass = false;
                        }
                    }
                    else{
                        devil.pure_costs[rarity] = 0;
                        devil.costs[rarity] = 0;
                    }
                }
                else{
                    devil.pure_costs[rarity] = 0;
                    devil.costs[rarity] = 0;
                }
            }
         
            if(!pass)   all_pass = false;
        });
    }

    this.races = ddd;
    this.race_data = race_data;
    this.devils = devil_array;
    this.devil_data = devil_data;
    this.skillTypes = sss;
    this.skills = skill_array;
    this.skill_data = skill_data;
    this.builder_options = [];
    this.fusion_options = [];
}

////////////////////
//      Main
////////////////////

// Initialize

const i18n = new VueI18n({
    locale: 'ja', // set locale
    messages: messages // set locale messages
});

var resource = [];
resource.push(new Resource(ddd_stable, skill_stable));

function setCookie(name,value)
{
    var Days = 365;
    var exp  = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;
}
  
var app = new Vue({
    i18n:i18n,
    el:'#app',
    data:{
        resource_id:0,
        resource_options:[
            {text:'Stable', value:0}
//            {text:'Preview (龍神)',value:1}
        ],
        race_id:0,
        skillType_id:0,

        //builder
        builder_rarity_options:[
            {text:"1+1", state:true, active:false},
            {text:"1+2", state:true, active:false},
            {text:"1+3", state:true, active:false},
            {text:"1+4", state:true, active:false},
            {text:"1+5", state:true, active:false},
            {text:"2+2", state:true, active:false},
            {text:"2+3", state:true, active:false},
            {text:"2+4", state:true, active:false},
            {text:"2+5", state:true, active:false},
            {text:"3+3", state:true, active:false},
            {text:"3+4", state:true, active:false},
            {text:"3+5", state:true, active:false},
            {text:"4+4", state:true, active:false},
            {text:"4+5", state:true, active:false},
            {text:"5+5", state:true, active:false}
        ],
        //fusion
        fusion_rarity_options:[
            {text:"1+1", state:true, active:false},
            {text:"1+2", state:true, active:false},
            {text:"1+3", state:true, active:false},
            {text:"1+4", state:true, active:false},
            {text:"1+5", state:true, active:false},
            {text:"2+2", state:true, active:false},
            {text:"2+3", state:true, active:false},
            {text:"2+4", state:true, active:false},
            {text:"2+5", state:true, active:false},
            {text:"3+3", state:true, active:false},
            {text:"3+4", state:true, active:false},
            {text:"3+5", state:true, active:false},
            {text:"4+4", state:true, active:false},
            {text:"4+5", state:true, active:false},
            {text:"5+5", state:true, active:false}
        ],
        
        //setting
        lang_value:0,
        lang_options:[
            {text:'日本語', value:0},
            {text:'繁體中文', value:1},
            {text:'English', value:2}
        ],
        allow_down_grade:0,
        allow_down_grade_options:[
            {text: 'message.allow', value:1},
            {text: 'message.deny', value:0}
        ],
        allow_prevent_unload:0,
        index_main:0,
        index_main_last:0,
        index_fusion:0,
        index_fusion_last:0,
        keyword:'',
        searchBar:false,
        //orb
        orbs:[
            {'name':'ライト', icon:'images/theme/light.png', state:false},
            {'name':'ダーク', icon:'images/theme/dark.png', state:false},
            {'name':'ニュートラル', icon:'images/theme/natural.png', state:false },
            {'name':'ロー', icon:'images/theme/law.png', state:false},
            {'name':'カオス', icon:'images/theme/chaos.png', state:false}
        ],
        //ArcheType (color)
        archetypes:[
            {slug:'archetype.common','style':{'background-image':'linear-gradient(#4a545b , #8e989f)'}, 'bar_style':{'background-image':'linear-gradient(to right, white , #e5eaee)'} },
            {slug:'archetype.aragami','style':{'background-image':'linear-gradient(#8c1030 , #be104b)'}, 'bar_style':{'background-image':'linear-gradient(to right, white, #fea4ba)'} },
            {slug:'archetype.protector','style':{'background-image':'linear-gradient(#8a5c27 , #be8f30)'}, 'bar_style':{'background-image':'linear-gradient(to right, white , #fee6b5)'} },
            {slug:'archetype.psychic','style':{'background-image':'linear-gradient(#7c3089 , #b63fbd)'}, 'bar_style':{'background-image':'linear-gradient(to right, white, #fabdfe)'} },
            {slug:'archetype.elementalist','style':{'background-image':'linear-gradient(#1d7974 , #1db4b2)'}, 'bar_style':{'background-image':'linear-gradient(to right, white, #adf9f8)'} }
        ],
        //Element
        elements:[
            {slug:'element.phys','style':{'background-color':'rgb(185, 185, 185)'}}, //0:物
            {slug:'element.fire','style':{'background-color':'rgb(219, 120, 120)'}}, //1:火
            {slug:'element.ice','style':{'background-color':'rgb(150, 220, 230)'}}, //2:冰
            {slug:'element.elec','style':{'background-color':'rgb(233, 230, 64)'}}, //3:雷
            {slug:'element.force','style':{'background-color':'rgb(133, 240, 156)'}}, //4:衝
            {slug:'element.light','style':{'background-color':'rgb(240, 236, 196)'}}, //5:破
            {slug:'element.dark','style':{'background-color':'rgb(218, 142, 221)'}} //6:咒
        ],

        //timer
        now:null,
        gate_status_ch:false,
        gate_status_jp:false,
        gate_timer_ch:null,
        gate_timer_jp:null,
        moon_status:0,
        moon_timer:null,
                
        //modal

        updated_at:'190205',
         
        //important for update computed's getter from setter
        computed_counter:{
            builder_target:0,
            builder_options:0,
            info_target:0,
            current_bom:0,
            fusion_target:0,
            fusion_options:0
        }
    },
    created:function(){

        var c_lang_value = getCookie('lang_value');
        if(window.location.hash){
            switch(window.location.hash.substring(1)){
                case 'jp': c_lang_value='0';break;
                case 'tw': c_lang_value='1';break;
                case 'en': c_lang_value='2';break;
            }
        }
        
        if(c_lang_value!=null){
            this.lang_value = c_lang_value;
        }

        switch(this.lang_value){
            case '0': i18n.locale='ja';break;
            case '1': i18n.locale='tw';break;
            case '2': i18n.locale='en';break;
            default: i18n.locale='ja';break;
        }

        var c_allow_down_grade = getCookie('allow_down_grade');

        if(c_allow_down_grade!=null){
            this.allow_down_grade = c_allow_down_grade;
        }

        var c_allow_prevent_unload = getCookie('allow_prevent_unload');

        if(c_allow_prevent_unload!=null){
            this.allow_prevent_unload = c_allow_prevent_unload;
        }

        this.update_now();

        setInterval(function(){

            app.tick();

        },1000);

    },
    updated:function(){

     
    },
    watch:{
        lang_value:function(){

            switch(this.lang_value){
                case 0: i18n.locale='ja';break;
                case 1: i18n.locale='tw';break;
                case 2: i18n.locale='en';break;
            }

            setCookie('lang_value', this.lang_value);
        },
        allow_down_grade:function(){
            
            this.update_builder_filter();
            this.update_fusion_filter();
            
            setCookie('allow_down_grade', this.allow_down_grade);
        },
        allow_prevent_unload:function(){
            
            setCookie('allow_prevent_unload', this.allow_prevent_unload);
        },
        resource_id:function(){
            
            this.reset_builder();
            this.reset_fusion();
        }
    },
    computed:{
        resource:function(){

            return resource[this.resource_id];
        },
        races:function(){

            return this.resource.races;
        },
        devils:function(){

            return this.resource.devils;
        },
        devils_by_race:function(){

            if(this.race_id >= this.races.length)
                this.race_id = this.races.length-1;

            return this.races[this.race_id].devils;
        },
        skillTypes:function(){

            return this.resource.skillTypes;
        },
        skills:function(){

            return this.resource.skills;
        },
        skills_by_type:function(){

            if(this.skillType_id >= this.skillTypes.length)
                this.skillType_id = this.skillType.length-1;

            return this.skillTypes[this.skillType_id].skills;
        },
        builder_target:{
            get:function(){

                this.computed_counter.builder_target;
                return this.resource.builder_target;
            },
            set:function(bom){

                this.resource.builder_target = bom;
                this.computed_counter.builder_target++;
            }
        },
        builder_options:{
            get: function(){

                this.computed_counter.builder_options;
                return this.resource.builder_options;
            },
            set:function(options){

                this.resource.builder_options = options;
                this.computed_counter.builder_options++;
            }
        },
        current_bom:{
            get:function(){
                
                this.computed_counter.current_bom;
                return this.resource.current_bom;
            },
            set:function(bom){
                this.resource.current_bom = bom;
                this.computed_counter.current_bom++;
            }
        },
        fusion_target:{
            get:function(){

                this.computed_counter.fusion_target;
                return this.resource.fusion_target;
            },
            set:function(bom){

                this.resource.fusion_target = bom;
                this.computed_counter.fusion_target++;
            }
        },
        fusion_options:{
            get: function(){

                this.computed_counter.fusion_options;
                return this.resource.fusion_options;
            },
            set:function(options){

                this.resource.fusion_options = options;
                this.computed_counter.fusion_options++;
            }
        },
        info_target:{
            get:function(){

                this.computed_counter.info_target;
                return this.resource.info_target;
            },
            set:function(devil){

                this.resource.info_target = devil;
                this.computed_counter.info_target++;
            }
        },
        filtered_devils: function(){

            var keyword = this.keyword.replace(/[!@#$%^&*()-=_+\[\]{}|\\]/g,'');

            var result = [];

            if(keyword){
                keyword = new RegExp(keyword, 'i');
                result = this.devils.filter(function(d){
                    return d.name.match(keyword)||d.name_tw.match(keyword)||d.name_en.match(keyword);
                });
            }

            return result;
        },
        filtered_skills: function(){

            var keyword = this.keyword.replace(/[!@#$%^&*()-=_+\[\]{}|\\]/g,'');

            var result = [];

            if(keyword){
                keyword = new RegExp(keyword, 'i');
                result = this.skills.filter(function(s){
                    return s.name.match(keyword)||s.name_tw.match(keyword)||s.name_en.match(keyword);
                });
            }

            return result;
        },
        filtered_builder_options:function(){

            var options = [];
            var filters = this.builder_rarity_options;
            var allow_down_grade = this.allow_down_grade;

            this.builder_options.forEach(function(option){

                var boms = option.boms.filter(function(bom){
                    
                    var r = bom.devil.rarity;
                    var r1 = bom.child1.devil.rarity;
                    var r2 = bom.child2.devil.rarity;
                    var temp = [r1,r2].sort();
                    
                    r1 = temp[0];
                    r2 = temp[1];

                    if( allow_down_grade==0 && (r1>r||r2>r)){
                        return false;
                    }

                    return filters.filter(function(filter){
                        if(filter.active&&filter.state&&filter.text==r1+'+'+r2){
                            return true;
                        }
                    }).length > 0;
                });

                if(boms.length)
                    options.push({name:option.name,boms:boms});
            });

            return options;
        },
        filtered_fusion_options:function(){

            var options = [];
            var filters = this.fusion_rarity_options;
            var allow_down_grade = this.allow_down_grade;

            this.fusion_options.forEach(function(option){

                var formulas = [];
                
                option.formulas.forEach(function(formula){

                    var boms = formula.boms.filter(function(bom){
                    
                        var r = bom.devil.rarity;
                        var r1 = bom.child1.devil.rarity;
                        var r2 = bom.child2.devil.rarity;
                        var temp = [r1,r2].sort();
                        
                        r1 = temp[0];
                        r2 = temp[1];

                        if( allow_down_grade==0 && (r1>r||r2>r)){
                            return false;
                        }

                        return filters.filter(function(filter){
                            if(filter.active&&filter.state&&filter.text==r1+'+'+r2){
                                return true;
                            }
                        }).length > 0;
                    });

                    if(boms.length){
                        formulas.push({name:formula.name,boms:boms});
                    }
                });

                if(formulas.length){
                    options.push({devil:option.devil,formulas:formulas,active:false});
                }
            });
            
            return options;
        }
    },
    methods:{

        route:function(name, skip_update_last){
            
            var index_main = this.index_main;
            var index_fusion = this.index_fusion;

            switch(name){
                case 'fusion.devil':    index_main = 0; index_fusion = 0;   break;
                case 'fusion.fission':  index_main = 0; index_fusion = 1;   break;
                case 'fusion.fusion':   index_main = 0; index_fusion = 2;   break;
                case 'skill':           index_main = 1;                     break;
                case 'customize':       index_main = 2;                     break;
                case 'search':          index_main = 3;                     break;
                case 'setting':         index_main = 4;                     break;
                case 'last':            index_main = this.index_main_last;
                                        index_fusion = this.index_fusion_last;  break;
                default:                index_main = 0; index_fusion = 0;   break;
            }

            if(!skip_update_last){
                this.index_main_last = index_main;
                this.index_fusion_last = index_fusion;
            }

            this.index_main = index_main;
            this.index_fusion = index_fusion;
        },
        isRoute:function(name){
            
            var index_main = this.index_main;
            var index_fusion = this.index_fusion;

            switch(name){
                case 'home':            index_main = 0; index_fusion = 0;   break;
                case 'fusion.devil':    index_main = 0; index_fusion = 0;   break;
                case 'fusion.fission':  index_main = 0; index_fusion = 1;   break;
                case 'fusion.fusion':   index_main = 0; index_fusion = 2;   break;
                case 'skill':           index_main = 1;                     break;
                case 'customize':       index_main = 2;                     break;
                case 'search':          index_main = 3;                     break;
                case 'setting':         index_main = 4;                     break;
                default:                index_main = 0; index_fusion = 0;   break;
            }

            return index_main == this.index_main && index_fusion == this.index_fusion;
        },
        start_bom: function(devil){

            this.builder_target = new DevilBom(devil);
            this.current_bom = null;
            this.route('fusion.fission');
            this.list_bom(this.builder_target);
        },
        list_bom: function(bom){

            this.update_current_bom(this.current_bom==bom?null:bom);
        },
        update_current_bom:function(bom){

            this.current_bom = bom;
            this.update_builder();
        },
        choose_bom: function(bom){

            this.current_bom.set(bom);
            this.update_current_bom(null);
        },
        reset_bom:function(bom){

            bom.unset();
            this.update_current_bom(null);
        },
        reset_builder:function(){
            
            this.builder_target = null; 
            this.update_current_bom(null);
        },
        builder_rarity_option_click:function(option){

            var flag_first_down = true;
            var flag_last_down = true;

            if(option.state)
                return false;

            this.builder_rarity_options.forEach(function(opt){

                if(opt.active && opt!=option && !opt.state){
                    flag_first_down = false;
                }

                if(opt.active && opt!=option && opt.state){
                    flag_last_down = false;
                }
            });

            if(flag_first_down){
                this.builder_rarity_options.forEach(function(opt){
                    opt.state = opt==option ;
                });
            }

            if(flag_last_down){
                this.builder_rarity_options.forEach(function(opt){
                    opt.state=true;
                });
            }
        },
        update_builder:function(){
            
            if(this.current_bom){
                this.builder_options = this.current_bom.devil.fission_formulas();
            }
            else{
                this.builder_options = [];
            }
            this.update_builder_filter();
        },
        update_builder_filter:function(){
            
            var combs = {};
            var allow_down_grade = this.allow_down_grade;

            this.builder_options.forEach(function(option){

                option.boms.forEach(function(bom){

                    var r = bom.devil.rarity;
                    var r1 = bom.child1.devil.rarity;
                    var r2 = bom.child2.devil.rarity;
                    var temp = [r1,r2].sort();
                    
                    r1 = temp[0];
                    r2 = temp[1];
                    
                    if( allow_down_grade==0 && (r1>r||r2>r)){
                        //skip
                    }
                    else{
                        if(!combs[r1+'+'+r2])
                            combs[r1+'+'+r2] = r1+'+'+r2;
                    }
                    
                });
            });
            
            this.builder_rarity_options.forEach(function(option){

                if(combs[option.text]){
                    option.active=true;
                    option.state=true;
                }
                else{
                    option.active=false;
                }
            });
        },
        fusion_rarity_option_click:function(option){

            var flag_first_down = true;
            var flag_last_down = true;

            if(option.state)
                return false;

            this.fusion_rarity_options.forEach(function(opt){

                if(opt.active && opt!=option && !opt.state){
                    flag_first_down = false;
                }

                if(opt.active && opt!=option && opt.state){
                    flag_last_down = false;
                }
            });

            if(flag_first_down){
                this.fusion_rarity_options.forEach(function(opt){
                    opt.state = opt==option ;
                });
            }

            if(flag_last_down){
                this.fusion_rarity_options.forEach(function(opt){
                    opt.state=true;
                });
            }
        },
        update_fusion:function(){

            if(this.fusion_target){
                this.fusion_options = this.fusion_target.fusion_formulas();
            }
            else{
                this.fusion_options = [];
            }
            this.update_fusion_filter();
        },
        fusion: function(devil){

            this.fusion_target = devil;
            this.update_fusion();
            this.route('fusion.fusion');
        },
        reset_fusion: function(){
            
            this.fusion_target = null;
            this.update_fusion();
        },
        update_fusion_filter: function(){

            var combs = {};
            var allow_down_grade = this.allow_down_grade;
            
            this.fusion_options.forEach(function(option){
                option.formulas.forEach(function(formula){
                    formula.boms.forEach(function(bom){

                        var r = bom.devil.rarity;
                        var r1 = bom.child1.devil.rarity;
                        var r2 = bom.child2.devil.rarity;
                        var temp = [r1,r2].sort();
                        
                        r1 = temp[0];
                        r2 = temp[1];
                        
                        if( allow_down_grade==0 && (r1>r||r2>r)){
                            //skip
                        }
                        else{
                            if(!combs[r1+'+'+r2])
                                combs[r1+'+'+r2] = r1+'+'+r2;
                        }
                    });
                });
            });
            
            this.fusion_rarity_options.forEach(function(option){

                if(combs[option.text]){
                    option.active=true;
                    option.state=true;
                }
                else{
                    option.active=false;
                }
            });
        },
        update_now:function(){

            var now = new Date();
            var utc = now.getTime() + now.getTimezoneOffset() * 60000;
            this.now = new Date( utc + 9 * 3600000 );
        },
        tick:function(){

        /*
            var sec = this.now.getSeconds()+1;

            if(sec==60)
                this.update_now();
            
            this.now.setSeconds( sec );
        
            var next, diff, h;
            var gate_hours_ch = [0,9,12,17,19,22];    //utc+8 [8,11,16,18,21,23]
            var gate_hours_jp = [0,7,12,17,19,22];    //utc+8 [6,11,16,18,21,23]

            var h = this.now.getHours();

            next = new Date(this.now.getTime());
            next.setMinutes(0);
            next.setSeconds(0);

            for(var i=0; i<gate_hours_ch.length;i++){
                var gate_hour = gate_hours_ch[i];
                if(h<gate_hour){
                    next.setHours(gate_hour);
                    this.gate_status_ch = false;
                    break;
                }
                if(h==gate_hour){
                    next.setHours(next.getHours()+1);
                    this.gate_status_ch = true;
                    break;
                }
                if(i==gate_hours_ch.length-1){
                    gate_hour = gate_hours_ch[0];
                    next.setHours(next.getHours()+24-h+gate_hour);
                    this.gate_status_ch = false;
                    break;
                }
            }
            var diff = new Date(next.getTime() - this.now.getTime());
            this.gate_timer_ch =  (diff.getUTCHours()+':'+diff.getUTCMinutes()+':'+diff.getUTCSeconds()).replace(/\b(?=(\d{1})(?!\d))/g,'0');

            next = new Date(this.now.getTime());
            next.setMinutes(0);
            next.setSeconds(0);

            for(var i=0; i<gate_hours_jp.length;i++){

                var gate_hour = gate_hours_jp[i];
                if(h<gate_hour){
                    next.setHours(gate_hour);
                    this.gate_status_jp = false;
                    break;
                }
                if(h==gate_hour){
                    next.setHours(next.getHours()+1);
                    this.gate_status_jp = true;
                    break;
                }
                if(i==gate_hours_jp.length-1){
                    gate_hour = gate_hours_jp[0];
                    next.setHours(next.getHours()+24-h+gate_hour);
                    this.gate_status_jp = false;
                    break;
                }
            }
            diff = new Date(next.getTime() - this.now.getTime());
            this.gate_timer_jp =  (diff.getUTCHours()+':'+diff.getUTCMinutes()+':'+diff.getUTCSeconds()).replace(/\b(?=(\d{1})(?!\d))/g,'0');
        */
            //orb
            var day = this.now.getDay();
            this.orbs[0].state = (day==1||day==6);          //light
            this.orbs[1].state = (day==2||day==6);          //dark
            this.orbs[2].state = (day==3||day==6||day==0);  //natural
            this.orbs[3].state = (day==4||day==0);          //law
            this.orbs[4].state = (day==5||day==0);          //chaos
        },
        show_devil_info:function(devil){

            //this.info_name = devil.name;
            this.info_target = devil;
            this.$root.$emit('bv::show::modal','modal_devil_info');
        },
        auto_costdown: function(bom, rarity, type){

            if(bom && bom.devil.rarity>rarity){

                var boms = [];

                bom.devil.fission_formulas().forEach(function(option){
                    boms = boms.concat(option.boms);
                });

                boms.sort(function(bom1, bom2){
                    var cost1 = type ? bom1.getCost(rarity) : bom1.getCostPure(rarity);
                    var cost2 = type ? bom2.getCost(rarity) : bom2.getCostPure(rarity);
                    if(cost1==cost2) return 0;
                    return cost1 > cost2 ? 1 : -1;
                });

                if(boms.length>0){
                    bom.set(boms[0]);
                }

                if(type==1){
                    //雜體
                    //var type1 = bom.pure_child == 1 ? 0 : 1;
                    //var type2 = bom.pure_child == 2 ? 0 : 1;
                    type1=0; //TODO
                    type2=0; //TODO
                    this.auto_costdown(bom.child1, rarity, type1);
                    this.auto_costdown(bom.child2, rarity, type2);
                }
                else{
                    //純素體
                    this.auto_costdown(bom.child1, rarity, type);
                    this.auto_costdown(bom.child2, rarity, type);
                }
            }
        },
        builder_auto_costdown:function(rarity, type){
            
            this.auto_costdown(this.builder_target, rarity, type);
            this.update_current_bom(null);
        }
    }
});

Vue.component('skill',{
    props:['skill'],
    template:'#skill-t'
});

Vue.component('skill-list',{
    props:['skills'] ,
    template:'#skill-list-t',
    data:function(){
        return {
            actives:[]
        }
    },
    watch:{
        skills:function(){
            this.actives=[];
        }
    }
});

Vue.component('devil',{
    props:['devil','usage','skill'],
    template:'#devil-t',
    methods:{
        click:function(){
            if(this.usage=='fission'){
                app.start_bom(this.devil);
            }
            if(this.usage=='builder'){
                this.$emit('click');
            }
        },
        info:function(){
            app.show_devil_info(this.devil);
        },
        isSkillAvailable:function(inherit){

            if(inherit){
                return this.skill==this.devil.skills[0] ||
                    this.devil.skill5.indexOf(this.skill)>=0;
            }
            else{
                return this.skill==this.devil.skills[1] ||
                    this.skill==this.devil.skills[2] ||
                    this.devil.skill4.indexOf(this.skill)>=0;
            }
        }
    }
});

Vue.component('devil-list',{
    props:['devils','usage','skill'] ,
    template:'#devil-list-t',
    methods:{
        click:function(devil){
            if(this.usage=='fission'){
                app.fission(devil);
            }
            if(this.usage=='builder'){
                this.start_bom(devil);
            }
        },
        fusion:function(devil){
            app.fusion(devil);
        },
        fission:function(devil){
            app.fission(devil, true);
        },
        start_bom:function(devil){
            app.start_bom(devil);
        }
    }
});

Vue.component('devil-bom',{
    props:['bom','usage'],
    template:'#devil-bom-t',
    methods:{
        click:function(){
            if(this.usage=='builder')
                this.choose_bom(this.bom);
        },
        choose_bom: function(){
            app.choose_bom(this.bom);
        },
        info:function(devil){
            app.show_devil_info(devil);
        }
    }
});

Vue.component('devil-bom-list',{
    props:['boms','usage'],
    template:'#devil-bom-list-t'
});

Vue.component('devil-bom-builder',{
    props:['bom'],
    template:'#devil-bom-builder-t',
    methods:{
        list_bom:function(bom){
            app.list_bom(bom);
        },
        reset_bom:function(bom){
            app.reset_bom(bom);
        },
        info:function(){
            app.show_devil_info(this.bom.devil);
        },
        toggle:function(){
            this.collapsed = !this.collapsed;
        },
        hasChild:function(){
            return this.bom.child1 || this.bom.child2;
        },
        isCurrent:function(){
            return this.bom ? this.bom == app.current_bom : false;
        },
        isParentCurrent:function(){
            return this.parent ? this.parent == app.current_bom : false;
        }
    },
    data:function(){
        return {collapsed: false}
    },
    computed:{
        collapsed_sign:function(){
            return this.collapsed ? '+' : '-';
        }
    }
});

Vue.component('devil-bom-options',{
    props:['options','usage'],
    template:'#devil-bom-options-t'
});

var window_before_unload = function(){
    
    if(app.allow_prevent_unload=='1'){
        return true;
    }
}
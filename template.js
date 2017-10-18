var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400); 
frameRate(60);


//ProgramCodeGoesHere
//Kyle Felter
//Caverunner full game
//try to get the fastest time by completing all the levels as quickly as possible
//this game is meant to challenge the player with puzzles
//if you get stuck, email me at felterkyle94@gmail.com
var sec = 0;
var startinglevel = 2;

var playerCharIndex = [0,1,8,9];

var gameObjects = [];
//array of characters in string form
var charArray1 = ["nnyyyynnnn",
                 "nntttbnnnn",
                 "nntbttnnnn",
                 "nntbbbngnn",
                 "nnnqqnnggn",
                 "nnnqqqqggg",
                 "nnnqqnnggn",
                 "nnnyynngnn",
                 "nnyyyynnnn",
                 "nqqnnqqnnn"];

var charArray2 = ["nnyyyynnnn",
                 "nntttbnnnn",
                 "nntbttnnnn",
                 "nntbbbngnn",
                 "nnnqqnnggn",
                 "nnnqqqqggg",
                 "nnnqqnnggn",
                 "nnnyynngnn",
                 "nnnyynnnnn",
                 "nnnqqnnnnn"];

var charArray3 = ["qqggqqqqq",
                 "qqqqqqqgqq",
                 "qqggggqggq",
                 "qqggqqqqqq",
                 "qqqqqqqggq",
                 "qqqgqqqqqq",
                 "qqqgqqggqq",
                 "gqqqqqggqq",
                 "gqqgggggqq",
                 "gqqqqqqqqg"];

var charArray4 = ["qggqqqbqq",
                 "bqqgqbqqqq",
                 "qbqqqqbqgg",
                 "qqbgqbqggq",
                 "qqqbqbqbqq",
                 "qgbqqqbqbq",
                 "qgqbgbgbqb",
                 "qbbqbqbqqq",
                 "bqggqqqbgq",
                 "qqggqqbqqq"];

var charArray5 = ["nnnnnnnnn",
                 "nnnnnnnnn",
                 "nnnnnnnnn",
                 "nnnnnnnnn",
                 "nnnnnnnnn",
                 "nnrrrrrrnn",
                 "nnrrrrrrnn",
                 "nnrrrrrrnn",
                 "g",
                 "g"];
                 
var charArray6 = ["nnnnnnnnn",
                 "nnnnnnnnn",
                 "nnnnnnnnn",
                 "nnnnnnnnn",
                 "nnnnnnnnn",
                 "nnnnnnnnn",
                 "nnnnnnnnn",
                 "nnrrrrrrnn",
                 "g",
                 "g"];

var charArray7 = ["nnnnggnnnn",
                 "nnnggggnnn",
                 "nnggggggnn",
                 "nggggggggn",
                 "gggggggggg",
                 "gggggggggg",
                 "nggggggggn",
                 "nnggggggnn",
                 "nnnggggnnn",
                 "nnnnggnnnn"];
                 
var charArray8 = ["nnnnnnnnnn",
                 "nnnnnngggn",
                 "nnrnngggnn",
                 "nwwngggnnn",
                 "nwwwwwwnnn",
                 "nwwwwwwnnn",
                 "nnnwwwwnnn",
                 "nnnnnngnnn",
                 "nnnnnnnnnn",
                 "nnnnnnnnnn"];

var charArray9 = ["nnnnyyyynn",
                 "nnnnbtttnn",
                 "nnnnttbtnn",
                 "nngnbbbtnn",
                 "nggnnqqnnn",
                 "gggqqqqnnn",
                 "nggnnqqnnn",
                 "nngnnyynnn",
                 "nnnnyyyynn",
                 "nnnqqnnqqn"];

var charArray10 = ["nnnnyyyynn",
                 "nnnnbtttnn",
                 "nnnnttbtnn",
                 "nngnbbbtnn",
                 "nggnnqqnnn",
                 "gggqqqqnnn",
                 "nggnnqqnnn",
                 "nngnnyynnn",
                 "nnnnnyynnn",
                 "nnnnnqqnnn"];

var charArray11 = ["nnnnnnnnnn",
                 "nnrrrnnwwn",
                 "nwwwwwwwwn",
                 "nnwwwwwwrn",
                 "nnwnwnwnnn",
                 "nnwnwnwnnn",
                 "nnwnwnwnnn",
                 "nnwnwnwnnn",
                 "nnwnwnwnnn",
                 "nnwnwnwnnn"];
                 
var charArray12 = ["nnnnnnnnnn",
                 "nnrrrnnwwn",
                 "nwwwwwwwwn",
                 "nnwwwwwwrn",
                 "nnwnwnwnnn",
                 "nnwnwnwnnn",
                 "nwnnwnnwnn",
                 "nwnnwnnwnn",
                 "wnnnwnnnwn",
                 "wnnnwnnnwn"];

var charArray13 = ["nnnnnnnnnn",
                 "nwwnnrrrnn",
                 "nwwwwwwwwn",
                 "nrwwwwwwnn",
                 "nnnwnwnwnn",
                 "nnnwnwnwnn",
                 "nnnwnwnwnn",
                 "nnnwnwnwnn",
                 "nnnwnwnwnn",
                 "nnnwnwnwnn"];
                 
var charArray14 = ["nnnnnnnnnn",
                 "nwwnnrrrnn",
                 "nwwwwwwwwn",
                 "nrwwwwwwnn",
                 "nnnwnwnwnn",
                 "nnnwnwnwnn",
                 "nnwnnwnnwn",
                 "nnwnnwnnwn",
                 "nwnnnwnnnw",
                 "nwnnnwnnnw"];
                 
var startScreenTileMap = ["RRRRRRRRRR",
                        "BBBBBBBBBB",
                        "RRRRRRRRRR",
                        "BBBBdBBBBB",
                        "RRRRRRRRRR",
                        "BBBBBBBBBb",
                        "RRRRRRRRRR",
                        "BBBBBBBsBB",
                        "RRRRRRRRRR",
                        "fpBBBBBBBf",];
                        
//all black red eye img0                     
var charArraybr1 = ["nnrrrrnnnn",
                 "nnbbbrnnnn",
                 "nnbbbbnnnn",
                 "nnbbbbngnn",
                 "nnnbbnnggn",
                 "nnnbbbbggg",
                 "nnnbbnnggn",
                 "nnnbbnngnn",
                 "nnbbbbnnnn",
                 "nbbnnbbnnn"];
                 
//all whte black eye img0
var charArraywb1 = ["nnbbbbnnnn",
                 "nnwwwbnnnn",
                 "nnwwwwnnnn",
                 "nnwwwwngnn",
                 "nnnwwnnggn",
                 "nnnwwwwggg",
                 "nnnwwnnggn",
                 "nnnwwnngnn",
                 "nnwwwwnnnn",
                 "nwwnnwwnnn"];
                 
                 
var charArraybr2 = ["nnrrrrnnnn",
                 "nnbbbrnnnn",
                 "nnbbbbnnnn",
                 "nnbbbbngnn",
                 "nnnbbnnggn",
                 "nnnbbbbggg",
                 "nnnbbnnggn",
                 "nnnbbnngnn",
                 "nnnbbnnnnn",
                 "nnnbbnnnnn"];
                 
var charArraywb2 = ["nnbbbbnnnn",
                 "nnwwwbnnnn",
                 "nnwwwwnnnn",
                 "nnwwwwngnn",
                 "nnnwwnnggn",
                 "nnnwwwwggg",
                 "nnnwwnnggn",
                 "nnnwwnngnn",
                 "nnnwwnnnnn",
                 "nnnwwnnnnn"];
                 
//black red image 8         
var charArraybr9 = ["nnnnrrrrnn",
                 "nnnnrbbbnn",
                 "nnnnbbbbnn",
                 "nngnbbbbnn",
                 "nggnnbbnnn",
                 "gggbbbbnnn",
                 "nggnnbbnnn",
                 "nngnnbbnnn",
                 "nnnnbbbbnn",
                 "nnnbbnnbbn"];
                 
var charArraywb9 = ["nnnnbbbbnn",
                 "nnnnbwwwnn",
                 "nnnnwwwwnn",
                 "nngnwwwwnn",
                 "nggnnwwnnn",
                 "gggwwwwnnn",
                 "nggnnwwnnn",
                 "nngnnwwnnn",
                 "nnnnwwwwnn",
                 "nnnwwnnwwn"];
                 
var charArraybr10 = ["nnnnrrrrnn",
                 "nnnnrbbbnn",
                 "nnnnbbbbnn",
                 "nngnbbbbnn",
                 "nggnnbbnnn",
                 "gggbbbbnnn",
                 "nggnnbbnnn",
                 "nngnnbbnnn",
                 "nnnnnbbnnn",
                 "nnnnnbbnnn"];
                 
var charArraywb10 = ["nnnnbbbbnn",
                 "nnnnbwwwnn",
                 "nnnnwwwwnn",
                 "nngnwwwwnn",
                 "nggnnwwnnn",
                 "gggwwwwnnn",
                 "nggnnwwnnn",
                 "nngnnwwnnn",
                 "nnnnnwwnnn",
                 "nnnnnwwnnn"];
                        
var level1 = ["                                                                     RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "                                                            RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "                                                             RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR   R",
			  "                                                                  RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "                 e                                     RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR   R                                              bbb",
			  "  pRRRRRRRRRRRRRRR                                                  RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "             s                                                     ",
			  "          RRRRRR                                                          RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "       sr                 sl                                ",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]

var level2 = ["p                   RRRRRRRRRRRRRRRRR",
			  "                    RRRRRRRRRRRRRRRRR",
			  "                    RRRRRRRRRRRRRRRRR",
			  "                    RRRRRRRRRRRRRRRRR",
			  "                    RRRRRRRRRRRRRRRRR",
			  "           sl       eRRRRRRRRRRRRRR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]
			  
var level3 = ["p                    RRRRRRRRRRRRRRRRR",
			  "   R      sl         RRRRRRRRRRRRRRRRR",
			  " R        sl         RRRRRRRRRRRRRRRRR",
			  "   R      sl         RRRRRRRRRRRRRRRRR",
			  " R        sl         RRRRRRRRRRRRRRRRR",
			  "   R      sl        eRRRRRRRRRRRRRRRRR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]
			  
var level4 = ["p                    RRRRRRRRRRRRRRRRR",
			  "   R  s          s   RRRRRRRRRRRRRRRRR",
			  " R    s          s   RRRRRRRRRRRRRRRRR",
			  "   R  s          s   RRRRRRRRRRRRRRRRR",
			  " R    s          s   RRRRRRRRRRRRRRRRR",
			  "   R  s          s   eRRRRRRRRRR   RRRR                              ",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRR                        ",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR            ",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]
			  
			  
var level5 = ["p                    RRRRRRRRRRRRRRRRR",
			  "                     RRRRRRRRRRRRRRRRR",
			  "      s          s   RRRRRRRRRRRRRRRRR",
			  "      s          s   RRRRRRRRRRRRRRRRR",
			  "      s          s   RRRRRRRRRRRRRRRRR",
			  "      s          s   eRRRRRRRRRR   RRRR                              ",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRR                        ",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR             b",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]
			  
			  
var level6 = [" d d d               RRRRRRRRRRRRRRRRR",
			  "p                    RRRRRRRRRRRRRRRRR",
			  "      s          s   RRRRRRRRRRRRRRRRR",
			  "      s          s   RRRRRRRRRRRRRRRRR",
			  "      s          s   RRRRRRRRRRRRRRRRR",
			  "      s          s   eRRRRRRRRRR   RRRR                              ",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR RRRRRR                        ",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR             b                                                b",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]
			  
var level7 = ["                     RRRRRRRRRRRRRRRRRRR",
			  "p                    RRRRRRRRRRRRRRRRRRR",
			  "      s              RRRRRRRRRRRRRRRRReR",
			  "      s    d   frs   RRRRRRRRRRRRRRRRRRR",
			  "               R     RRRfjRRRRRRRfuRRRRR",
			  "      s          s   RRRRRRRRRRRRRRRRRRR                           ",
			  "RRRRsRsRRRRRRRRRRsRRRRsRRRRRRRRRRRRRRRRR                       ",
			  "RRRRRR RRRRRRRRRRRRRRsRRRRRRRRRRRRRRRRRR   ",
			  "RRRRfrsfj  fuRRRRRRsR     frRRRRRfuRRRRR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]
			  
var level8 = ["                     RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			  "p                    RflRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "                 e   RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			  "               RRR                             RRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "                          s     fl     fj      RRRRRRRRRRRRRRRRRRRRRRRRRRs",
			  "                       frRbRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "                       RRRsRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			  "                     b RRRsRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR  fuR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR  RRs",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]
			  
var level9 = ["                     dRRRRRRRRRRRRRRRRRRRRsRRsRRRRRRRsRRsRsRsRRRRRRRRRRRRs",
			  "p                    RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR  eRR",
			  "                     RRRRRRRRRRRRRRRRRRRRRfrRsRRRRRRRRRRRRRsRRRRRRRRR  RRs",
			  "                     sRRRRR   RRRRRfuRRRRRRRRsRRRRRRRRRRRRRRRRRRRRRRR RRRR",
			  "                     RRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			  "                     sRfl  RRRRRRRRRRRRRRRR  fjRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "                 b   RRRRRRRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			  "                b    RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			  "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]
			  
var level10 = ["                                                                         s",
			   "    e      s                                                          p  R",
			   "    RRRRRRRRRRRRRRRRRRR                                                  s",
			   "    RRRRRRRRRRRRRRRRRRR                                                  R",
			   "    RRRRRRRRRRRRRRRRRRR                                                  s",
			   "    RRRfuRRRRRRRRRRRRRR                                                  R",
			   "    RRRRRRRRRRRRRRRRRRR                                                  s",
			   "                                                                         R",
			   "                                                                         s",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]
			  
var level11 = ["       d             eRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "p      R             RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			   "                     RRRRRRRRRRRRRbRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "       R    R   R   sRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			   "   R     s s  s   s  RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "       R             sRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			   "     R           b   RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "   R            b    RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]
			  

			  
var level12 = [" p                                      RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "                                    b  sRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR  eRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			   "                   sl                   RR                   RRRRRRRRRRRRRRRRRRRRbRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "                   sl                frsRR                   RRRRRRRRRRRRRRRRRRRRbRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR               RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR         fr       RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR         R        RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs       s s s   fuRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]

var level13 = ["               p                        RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRbRRRRRRRRRRRs",
			   "                                        RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRbRRRRRRR",
			   "                                        RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRbRRRRRRRRRRRRRRRRRRRRRRRRs          b",
			   "      sr                  b          fr RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRbRRRRRRRRRRRRRRR          bb",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRbRRRRRRRRRRRRRRRRRRRRRRRRs        bbbbb",
			   "                                        RRRRRRRslsrRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR           bb",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs          b",
			   "                                 fu     RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRbRRRRRRRRRRRRRRR",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRbRReRRRRRRRRRbRRRRRRRRRRRs",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]
			  
var level14 = ["RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR     RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR p fjRRRRRRRRRfrRRRRRRRRRRsRRRRRRRRRRRRRRRRRRRRRRRRRbRRRRRRRRs",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR   sRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "RRflRRRRRRflRRRRRRRRRflRRRRRRRRRRflRRRRRRRRRRRRRRRRfl  frRRRRRRRRfrRRRRRsRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRb                b               b ",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRfrRRRRfrRRRRRfrRRRRRfrRRRRRRfrRRRRRRRRReRsb                b               b ",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]
			  
var level15 = ["RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRsb",
			   "RRR   RReRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRsRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRb",
			   "RRR  RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRsb",
			   "RRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR     RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRb",
			   "RRR RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRfjRRRRR p   RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRsb",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRsRsR     RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRb",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR     RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRsb",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR     RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRb",
			   "RRRfuRRRRRRfrRRRRRRRRRRRflRRRRRRRRRRflRRRRRRRRRRRRR fu  RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRsb",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRb"]
			   
var level16 = ["  p                                               b   b  b   b    b                 b     b  b  b   b          s",
			   "                                                   b b  b b  b    b                  b b b   b  b b b          R",
			   "                                                    b  b   b b    b                   b b    b  b   b            s",
			   "                                                    b   b b  b    b                                              R",
			   "                                                    b    b   bbbbbb                                             s",
			   "                                                                                                                R",
			   "                                                                                                                s",
			   "                                                e                                                               R",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRs",
			   "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"]
			   

			  
//array of images
var imageArray = [];



var createChars = function(charArray){
    background(0, 0, 0, 0);
    noStroke();
    for(var i = 0; i < 10;i++){
        for(var j = 0; j < 10; j++){
            if(charArray[i][j] === "y"){
                fill(255, 255, 0);
            }
            else if(charArray[i][j] === "t"){
                fill(250, 221, 147);
            }
            else if(charArray[i][j] === "b"){
                fill(0, 0, 0);
            }
            else if(charArray[i][j] === "g"){
                fill(179, 179, 179);
            }
            else if(charArray[i][j] === "q"){
                fill(148, 104, 16);
            }
            else if(charArray[i][j] === "n"){
                fill(255, 0, 0,0);
            }
            else if(charArray[i][j] === "r"){
                fill(255, 0, 0);
            }
            else if(charArray[i][j] === "w"){
                fill(255, 255, 255);
            }
            rect(j*40,i*40,40,40);
        }
    }
    imageArray.push(get(0,0,400,400));
};

var createAllChars = function(){
	createChars(charArray1);
	createChars(charArray2);
	createChars(charArray3);
	createChars(charArray4);
	createChars(charArray5);
	createChars(charArray6);
	createChars(charArray7);
	createChars(charArray8);
	createChars(charArray9);
	createChars(charArray10);
	createChars(charArray11);
	createChars(charArray12);
	createChars(charArray13);
	createChars(charArray14);
};

createAllChars();

var createBG = function(){
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 10; j++){
            image(imageArray[2],i*40,j*40,40,40);
        }
    }
    fill(0, 0, 0,170);
    rect(0,0,400,400);
    for(var i = 0; i < 10; i+=2){
        for(var j = 0; j < 10; j++){
            image(imageArray[2],j*40,i*40,40,40);
        }
    }
    imageArray.push(get(0,0,400,400));
    
        for(var i = 0; i < 10; i++){
        for(var j = 0; j < 10; j++){
            image(imageArray[2],i*40,j*40,40,40);
        }
    }
    fill(0, 0, 0,170);
    rect(0,0,400,400);
    imageArray.push(get(0,0,400,400));
    background(255,255,255,0);
    for(var i = 0; i < 5; i++){
    	for(var j = 0; j < 10; j++){
    		image(imageArray[2],j*40,i*40 - 20 + 240,40,40);
    	}
    }
    imageArray.push(get(0,0,400,400));
};

createBG();

//index starts at 16
createChars(charArraybr1);//16
createChars(charArraywb1);//17
createChars(charArraybr2);//18
createChars(charArraywb2);//19
createChars(charArraybr9);//20
createChars(charArraywb9);//21
createChars(charArraybr10);//22
createChars(charArraywb10);//23

var playerObj = function(x,y){
    this.p = new PVector(x,y);
    this.v = new PVector(1,0);
    this.angle = 0;
    this.callcount = 0;
    this.jump = 0;
    this.run = 0;
    this.type = "player";
    this.life = 1;
    this.onBlock = 0;
};

playerObj.prototype.display = function(){
    pushMatrix();
    translate(this.p.x,this.p.y);
    if(this.jump === 0){
		if(this.v.x > 0){
			if(this.callcount > 30){
				image(imageArray[playerCharIndex[1]],-20,-20,40,40);
			}
			else{
				image(imageArray[playerCharIndex[0]],-20,-20,40,40);
			}
		}
		else{
			if(this.callcount > 30){
				image(imageArray[playerCharIndex[2]],-20,-20,40,40);
			}
			else{
				image(imageArray[playerCharIndex[3]],-20,-20,40,40);
			}
		}
    }
    else{
    	if(this.v.x > 0){
			image(imageArray[playerCharIndex[1]],-20,-20,40,40);
		}
		else{
			image(imageArray[playerCharIndex[3]],-20,-20,40,40);
		}
    }
    
    popMatrix();
    
};

var grav = new PVector(0,0.13);

var player = new playerObj(200,200);

var batObj = function(x,y){
    this.p = new PVector(x + 20,y + 20);
    this.v = new PVector(-3.5,0);
    this.direction = 1;
    this.type = "bat";
};

batObj.prototype.display = function(){
    image(imageArray[7],this.p.x - 20,this.p.y - 20,40,40);
};

batObj.prototype.update = function(mode){
	if(mode === 1){
		this.p.add(this.v);
		if(this.p.x < 0){
			//this.p.x = 400;
		}
	}
	else{
		this.p.add(this.v);
		if(this.p.x < 0){
			this.p.x = 400;
		}
	}
};

var btnObj = function(x,y,dir){
    this.p = new PVector(x + 20,y + 20);
    this.pressed = 0;
    this.dir = dir;
    switch(dir){
    	case "l":
    		this.horz = -1;
    		this.vert = 0;
    		break;
    	case "r":
    		this.horz = 1;
    		this.vert = 0;
    		break;
    	case "j":
    		this.horz = 0;
    		this.vert = 1;
    		break;
    	case "u":
    		this.horz = 0;
    		this.vert = -1;
    		break;
    	default:
    		this.horz = 0;
    		this.vert = 0;
    }
    this.type = "btn";
};

btnObj.prototype.display = function(){
    if(this.pressed === 0){
        image(imageArray[4],this.p.x-20,this.p.y-20,40,40);
    }
    else{
        image(imageArray[5],this.p.x-20,this.p.y-20,40,40);
    }
    
    switch(this.dir){
    	case "u":
    		fill(255,255,0);
    		rect(this.p.x - 20, this.p.y - 20 + 30, 40, 10);
    		break;
    	case "j":
    		fill(0,255,0);
    		rect(this.p.x - 20, this.p.y - 20 + 30, 40, 10);
    		break;
    	case "l":
    		fill(0,0,255);
    		rect(this.p.x - 20, this.p.y - 20 + 30, 40, 10);
    		break;
    	case "r":
    		fill(255,0,255);
    		rect(this.p.x - 20, this.p.y - 20 + 30, 40, 10);
    		break;
    	default:
    		rect(200,200,200,200);
    	}
};

var startingPlayer = new playerObj(0,0);


var spiderObj = function(x,y,dir){
    this.p = new PVector(x,y);
    this.v = new PVector(1*dir,0);
    this.callcount = 0;
    this.type = "spider";
};

spiderObj.prototype.display = function(){
    pushMatrix();
    translate(this.p.x,this.p.y);
    if(this.v.x > 0){
        if(this.callcount > 30){
            image(imageArray[10],-20,-20,40,40);
        }
        else{
            image(imageArray[11],-20,-20,40,40);
        }
    }
    else{
        if(this.callcount > 30){
            image(imageArray[12],-20,-20,40,40);
        }
        else{
            image(imageArray[13],-20,-20,40,40);
        }
    }
    
    popMatrix();
};

spiderObj.prototype.update = function(mode){
	if(mode === 1){
		if(this.v.x != 0){
			this.p.add(this.v);
			this.callcount++;
			if(this.callcount > 60){
				this.callcount = 0;
			}
			else{
				this.callcount++;
			}
		}
	}
	else{
		this.p.add(this.v);
		this.callcount++;
		if(this.callcount > 60){
			this.callcount = 0;
		}
		else{
			this.callcount++;
		}
	
		if(this.p.x < 20){
			this.v.x *= -1;
			this.direction = 0;
		}
		if(this.p.x > 380){
			this.v.x *= -1;
			this.direction = 1;
		}
	}
};

var bldrObj = function(x,y){
    this.p = new PVector(x+20,y+20);
    this.v = new PVector(0,0);
    this.angle = 0;
    this.direction = 0;
    this.type = "bldr";
};

bldrObj.prototype.display = function(){
    pushMatrix();
    translate(this.p.x,this.p.y);
    rotate(this.angle);
    image(imageArray[6],-20,-20,40,40);
    popMatrix();
};

bldrObj.prototype.update = function(mode){
	if(mode === 1){
		this.v.add(new PVector(0,0.005));
		this.p.add(this.v);
		this.angle += 0.04;// *180/3.14;
    }
    else{
    	this.p.add(this.v);
		this.angle += 0.02;// *180/3.14;
		if(this.p.x > 360){
			this.p.x = -40;
		}
    }
};

var wallObj = function(x,y){
	this.x = x;
	this.y = y;
	this.type = "wall";
};


wallObj.prototype.display = function(){
	pushMatrix();
	translate(this.x,this.y);
	image(imageArray[2],-20,-20,40,40);
	popMatrix();
};

var particleObj = function(x,y){
	this.p = new PVector(x,y);
	this.v = new PVector(random(-1.5,1.5),random(-1.5,1.5));
	this.decay = random(10,20);
	//this.shade = random(0,100);
};

particleObj.prototype.display = function(){
	fill(222-50,184-50,135-50,200);
	rect(this.p.x - 10, this.p.y - 10, 20, 20);
	//ellipse(this.p.x, this.p.y, 20, 20)
	//fill(0,0,0,this.shade);
	//rect(this.p.x - 10, this.p.y - 10, 20, 20);
};

particleObj.prototype.update = function(){
	this.p.add(this.v);
	this.decay--;
};

var gameObj = function(){
	this.walls = [];
	this.enemies = [];
	this.buttons = [];
	this.particles = [];
	this.gameState = 0;
	this.level = startinglevel;
	this.player = new playerObj(200,200);
	this.exit = new PVector(0,0);
	this.start = 0;
};

var game = new gameObj();

playerObj.prototype.update = function(mode){
	if(mode === 0){
		this.p.add(this.v);
		this.callcount++;
		if(this.callcount > 60){
			this.callcount = 0;
		}
		else{
			this.callcount++;
		}
	
		if(this.p.x < 20){
			this.v.x *= -1;
			this.direction = 0;
		}
		if(this.p.x > 380){
			this.v.x *= -1;
			this.direction = 1;
		}
    }
    else{
    	this.p.add(this.v);
    	var foundrock = 0;
    	//check collision with walls
    	for(var i = 0; i < game.walls.length; i++){
    		if(this.p.x > game.walls[i].x - 20 && this.p.x < game.walls[i].x + 20)
    		{
    			if(this.p.y > game.walls[i].y - 60 && this.p.y < game.walls[i].y + 40){
    				fill(255,255,255, 100);
    				rect(game.walls[i].x -20, game.walls[i].y - 20, 40,40);
    				foundrock = 1;
    				if(this.v.y > 0){
    				//player is falling
    					this.v.add(grav);
    					//check collision
    					if(this.p.y > game.walls[i].y - 40){
    						//player has past the boarder of the rock
    						this.v.y = 0;
    						this.p.y = game.walls[i].y - 40;
    						this.jump = 0;
    					}
    				}
    				else if(this.v.y < 0){
    				//player is jumping
    					if(this.p.y > game.walls[i].y){
    						this.v.y*=0;
    						this.p.y = game.walls[i].y + 41;
    					}
    					else{
    					    this.v.add(grav);
    					}
    				}
    				else{
    				//player is running on the ground
    					this.jump = 0;
    					if(dist(this.p.x,this.p.y,game.walls[i].x,game.walls[i].y) < 30){
    						//add particles
    						game.particles.push(new particleObj(game.walls[i].x,game.walls[i].y));
    						game.particles.push(new particleObj(game.walls[i].x,game.walls[i].y));
    						game.particles.push(new particleObj(game.walls[i].x,game.walls[i].y));
    						game.walls.splice(i,1);
    						
    					}
    					this.onBlock = i;
    				}
    			}
    		}
    	}
    	if(foundrock === 0){
    		//add grav
    		this.v.add(grav);
    	}
    	if(this.p.y > 420){
    		this.life = 0;
    	}
    	
    	//check collision with enemies
    	for(var i = 0; i < game.enemies.length; i++){
    		if(game.enemies[i].type === "bat"){
    			var dis = 30;
    		}
    		else{
    			dis = 41;
    		}
			if(dist(this.p.x,this.p.y,game.enemies[i].p.x,game.enemies[i].p.y) < dis){
				this.life = 0;
			}
    	}
    	
		if(this.callcount > 60){
			this.callcount = 0;
		}
		else if(this.v.x*this.v.x > 0.001){
			this.callcount+=4;
		}
    }
};

btnObj.prototype.update = function(){
    if(this.pressed === 0){
        if(dist(this.p.x,this.p.y, game.player.p.x, game.player.p.y) < 20){
            this.pressed = 1;
            switch(this.dir){
            }
            game.player.v.set(0.001,0.001);
            game.player.p.add(new PVector(200*this.horz,200*this.vert));
        }
    }
};


var initTileMap = function(tm){
	//clear all game objects
	game.walls.splice(0,game.walls.length);
	game.enemies.splice(0,game.enemies.length);
	game.buttons.splice(0,game.buttons.length);
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < tm[i].length; j++){
            if(tm[i][j] === "R"){
            	game.walls.push(new wallObj(j*40 + 20,i*40 + 20));
                //image(imageArray[2],j*40,i*40,40,40);
            }
            else if(tm[i][j] === "p"){
                game.player = new playerObj(j*40 + 20,i*40 + 20);
                //image(imageArray[0],j*40,i*40,40,40);
                game.player.v.x = 0.0001;
            }
            else if(tm[i][j] === "b"){
                game.enemies.push(new batObj(j*40,i*40));
                //image(imageArray[7],j*40,i*40,40,40);
            }
            else if(tm[i][j] === "f"){
                game.buttons.push(new btnObj(j*40,i*40,tm[i][j+1]));
                //image(imageArray[4],j*40,i*40,40,40);
            }
            else if(tm[i][j] === "s"){
            	if(tm[i][j + 1] === "r"){
            		var dir = 1;
            	}
            	else if(tm[i][j+1] === "l"){
            		var dir = -1
            	}
            	else{
            		var dir = 0;
            	}
                game.enemies.push(new spiderObj(j*40 + 20,i*40 + 20, dir));
                image(imageArray[10],j*40,i*40,40,40);
            }
            else if(tm[i][j] === "d"){
                game.enemies.push(new bldrObj(j*40,i*40 - 100));
                //image(imageArray[6],j*40,i*40,40,40);
            }
            else if(tm[i][j] === "e"){
                game.exit.set(j*40+20,i*40+20);
            }
            
        }
    }
};

var initTitleScreen = function(){
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 10; j++){
            if(startScreenTileMap[i][j] === "R"){
                image(imageArray[2],j*40,i*40,40,40);
            }
            else if(startScreenTileMap[i][j] === "p"){
                gameObjects.push(new playerObj(j*40 + 20,i*40 + 20));
                //image(imageArray[0],j*40,i*40,40,40);
            }
            else if(startScreenTileMap[i][j] === "b"){
                gameObjects.push(new batObj(j*40,i*40));
                //image(imageArray[7],j*40,i*40,40,40);
            }
            else if(startScreenTileMap[i][j] === "f"){
                gameObjects.push(new btnObj(j*40,i*40,"u"));
                //image(imageArray[4],j*40,i*40,40,40);
            }
            else if(startScreenTileMap[i][j] === "s"){
                gameObjects.push(new spiderObj(j*40 + 20,i*40 + 20,-1));
                //image(imageArray[10],j*40,i*40,40,40);
            }
            else if(startScreenTileMap[i][j] === "d"){
                gameObjects.push(new bldrObj(j*40,i*40));
                gameObjects[gameObjects.length - 1].v.set(0.8,0);
                //image(imageArray[6],j*40,i*40,40,40);
            }
            
        }
    }
};

var loadLevel = function(){
	switch(game.level) {
    case 1:
        initTileMap(level1);
        break;
    case 2:
        initTileMap(level2);
        break;
    case 3:
        initTileMap(level3);
        break;
    case 4:
        initTileMap(level4);
        break;
    case 5:
        initTileMap(level5);
        break;
    case 6:
        initTileMap(level6);
        break;
    case 7:
    	initTileMap(level7);
    	break;
    case 8:
    	initTileMap(level8);
    	break;
    case 9:
    	initTileMap(level9);
    	break;
    case 10:
    	initTileMap(level10);
    	break;
	case 11:
    	initTileMap(level11);
    	break;
	case 12:
    	initTileMap(level12);
    	break;
	case 13:
    	initTileMap(level13);
    	break;
	case 14:
    	initTileMap(level14);
    	break;
	case 15:
    	initTileMap(level15);
    	break;
	case 16:
    	initTileMap(level16);
    	break;
	case 17:
    	game.start = 2;
    	break;
    default:
    	fill(255,255,255)
    	text("To be continued!", game.player.p.x + 20, game.player.p.y);
	}
}


initTitleScreen();
//initTileMap(startScreenTileMap);
var displayInstructions = 0;
var next = 0;
var selection = 0;

game.player.v.x = 0;
//initTileMap(level2);

var frame = 0;

var milsec = 0;
var min = 0;
var draw = function() {
    if(game.start === 0){
    	if(displayInstructions === 0){
			image(imageArray[14],0,0,400,400);
			for(var i = 0; i < gameObjects.length; i++){
				gameObjects[i].update(0);
				gameObjects[i].display();
			}
			textSize(30);
			fill(255,255,255);
			text("CAVE RUNNER",90,75);
			textSize(22);
			text("Created by Kyle Felter",90,150);
			text("Click here for Instructions and Options",15,230);
		}
		else{
			if(next === 0){
			//noLoop();
				textSize(18);
				fill(255, 255, 255);
				image(imageArray[14],0,0,400,400);
				text("Use the arrow keys to control the Cave Runner",10,65);
				textSize(16);
				text("Complete all 15 levels as fast as possible!",50,65+80);
				textSize(18);
				text("Avoid the spiders, bats and boulders",50,65+160);
				textSize(14);
				text("Use the down arrow to drill down into the ground",50,65 + 240);
				text("NEXT PAGE ---->",160,65 + 320);
			}
			else{
				textSize(18);
				fill(255, 255, 255);
				image(imageArray[14],0,0,400,400);
				text("You can drill left and right but not up",60,65);
				textSize(16);
				text("Select your Caverunner skin:",50,65+80);
				fill(255,0,255);
				switch(selection){
					case 0:
						rect(260,120,40,40);
						break;
					case 1:
						rect(300,120,40,40);
						break;
					case 2:
						rect(340,120,40,40);
						break;
				}
				image(imageArray[0],260,60+60,40,40);
				image(imageArray[17],260 + 40,60+60,40,40);
				image(imageArray[18],260 + 80,60+60,40,40);
			
				textSize(18);
				fill(255,255,255);
				text("Press a button by getting close to it",50,65+160);
				textSize(11);
				text("Pressing a button will teleport you in one of 4 directions: up, down, left, or right",10,65 + 240);
				textSize(18);
				text("START GAME!",150,385);
			
			}
		}
	}
    else if(game.start === 1){
    //gameplay
    milsec++;
		if(game.player.p.x > 100){
			pushMatrix()
			translate(-game.player.p.x/4 + 25,0);
			image(imageArray[15],0,0,1200,1200);
			image(imageArray[15],1200,0,1200,1200);
			popMatrix();
			//pushMatrix();
			translate(-game.player.p.x + 100,0);
		}
		else{
			image(imageArray[15],0,0,1200,1200);
		}
		for(var i = 0; i < game.walls.length; i++){
			//gameObjects[i].display();
			fill(222,184,135);
			rect(game.walls[i].x - 20, game.walls[i].y - 20, 40,40);
		}
		
		for(var i = 0; i < game.enemies.length; i++){
			game.enemies[i].update(1);
			game.enemies[i].display();
		}
		for(var i = 0; i < game.particles.length; i++){
			game.particles[i].update();
			game.particles[i].display();
			if(game.particles[i].decay < 0){
				game.particles.splice(i,1);
			}
		}
		for(var i = 0; i < game.buttons.length; i++){
			game.buttons[i].update();
			game.buttons[i].display();
		}
		game.player.update(1);
		game.player.display();
		if(game.player.life === 0){
    		game.player.life = 1;
    		loadLevel();
    	}
    	if(dist(game.player.p.x,game.player.p.y,game.exit.x,game.exit.y) < 20){
    		game.level++;
    		loadLevel();
    	}
    	fill(255,255,255);
    	ellipse(game.exit.x, game.exit.y, 30,40);
		if(milsec > 59){
			sec++;
			milsec = 0;
		}
		if(sec > 59){
			min++;
			sec = 0;
		}

		fill(255,255,255);
		text( "Your time " + min + " : " + floor(sec) + " . " + floor(milsec*100/60),game.player.p.x-10,20);
		text("Level " + (game.level - 1) + "/15", game.player.p.x -10, 30);
	}
	else{
		//game over screen
		//display time and options
		image(imageArray[14],0,0,400,400);
		textSize(30);
		fill(255,255,255);
		text("CONGRATULATIONS",50,75);
		textSize(18);
		text( "Your Final Time " + min + " : " + floor(sec) + " . " + floor(milsec*100/60),90,150);
		text("Click here to play again!",100,230);
		//dist functions for clicking
		
	}

    //popMatrix();
    frame++;

};

gameObj.prototype.reset = function(){
	this.walls = [];
	this.enemies = [];
	this.buttons = [];
	this.particles = [];
	this.gameState = 0;
	this.level = startinglevel;
	this.player = new playerObj(200,200);
	this.exit = new PVector(0,0);
	this.start = 0;
	displayInstructions = 0;
    next = 0;
    selection = 0;

    game.player.v.x = 0;
    //initTileMap(level2);

    frame = 0;

    milsec = 0;
    min = 0;
};

var endScreen = function(){
	
	game.reset();
};


mouseClicked = function(){
	if(displayInstructions === 1 && next === 1 && dist(170,385,mouseX,mouseY) < 75){
    	game.start = 1;
    	switch(selection){
    		case 0:
    			playerCharIndex = [0,1,8,9];
    			break;
    		case 1:
    			playerCharIndex = [17,19,21,23];
    			break;
    		case 2:
    			playerCharIndex = [18,20,22,24];
    			break;
    		
    	}
    	initTileMap(level2);
    }
    if(displayInstructions === 1 && next === 0){
    	next++;
    }
    else{
    	fill(255,0,255);
    	if(dist(mouseX,mouseY,260 + 20,120+20) < 30){
    		selection = 0;
    		
    		//push char arrays
    	}
    	else if(dist(mouseX,mouseY,300+20,120+20) < 30){
    		selection = 1;
    		//push char arrays
    	}
    	else if(dist(mouseX,mouseY,340+20,120+20) < 30){
    		selection = 2;
    		//push char arrays
    	}
    }
    
    if(dist(mouseX,mouseY,200,200) < 90 && displayInstructions === 0){
        displayInstructions = 1;
    }
    if(game.start === 2){
		game.reset();
    }
};

keyPressed = function(){
    if(keyCode === UP){
    	if(game.player.jump != 1){
    		game.player.v.add(new PVector(0,-5));
    		game.player.jump = 1;
    	}
    }
    if(keyCode === RIGHT){
    	game.player.v.set(new PVector(3,game.player.v.y));
    }
    if(keyCode === LEFT){
    	game.player.v.set(new PVector(-3,game.player.v.y));
    }
    if(keyCode === DOWN){
    	if(dist(game.walls[game.player.onBlock].x,game.walls[game.player.onBlock].y,game.player.p.x,game.player.p.y) < 50){
    		game.particles.push(new particleObj(game.walls[game.player.onBlock].x,game.walls[game.player.onBlock].y));
    		game.particles.push(new particleObj(game.walls[game.player.onBlock].x,game.walls[game.player.onBlock].y));
    		game.particles.push(new particleObj(game.walls[game.player.onBlock].x,game.walls[game.player.onBlock].y));
    		game.walls.splice(game.player.onBlock,1);
    	}
    	if(game.player.jump === 1){
    		game.player.v.add(grav);
    	}
    }
    
};

keyReleased = function(){
	if((keyCode === RIGHT || keyCode === LEFT ) ){
		game.player.v.set(game.player.v.x*0.00001,game.player.v.y);
	}
};

}};

# Options Put Volume 
# Initial script by JeanTann3en
# Refactored and optimized by Wahakalaka
# This thinkscript will pull option call volume for the underlying symbol 
# and then overlay it on a histogram, for the configured dates. 


script agg_vol {
input exp = "200417";
input start_price = 200;
input end_price = 250;
input type = "C";

plot agg_put_vol = fold strike = start_price to end_price with v do v + 
if isNan(volume(Concat(".", Concat(GetSymbol(), Concat(exp, Concat(type, strike)))))) then 0 
else volume(Concat(".", Concat(GetSymbol(), Concat(exp, Concat(type, strike)))));
}



declare lower;

input date_strike_ranges = no;

input strike_start = 180;
input strike_end = 300;

input date01 = "200409";
input date02 = "200413";
input date03 = "200415";
input date04 = "200417";
input date05 = "200424";
input date06 = "200501";
input date07 = "200515";
input date08 = "200619";

input strike_start_01 = 180;
input strike_end_01 = 300;

input strike_start_02 = 180;
input strike_end_02 = 300;

input strike_start_03 = 180;
input strike_end_03 = 300;

input strike_start_04 = 180;
input strike_end_04 = 300;

input strike_start_05 = 180;
input strike_end_05 = 300;

input strike_start_06 = 180;
input strike_end_06 = 300;

input strike_start_07 = 180;
input strike_end_07 = 300;

input strike_start_08 = 180;
input strike_end_08 = 300;


plot call_vol_01;
if date_strike_ranges{
 call_vol_01 = agg_vol(date01, strike_start_01, strike_end_01, "C");
} else {
 call_vol_01 = agg_vol(date01, strike_start, strike_end, "C");
}

plot call_vol_02;
if date_strike_ranges{
 call_vol_02 = agg_vol(date02, strike_start_02, strike_end_02, "C");
} else {
 call_vol_02 = agg_vol(date02, strike_start, strike_end, "C");
}

plot call_vol_03;
if date_strike_ranges{
 call_vol_03 = agg_vol(date03, strike_start_03, strike_end_03, "C");
} else {
 call_vol_03 = agg_vol(date03, strike_start, strike_end, "C");
}

plot call_vol_04;
if date_strike_ranges{
 call_vol_04 = agg_vol(date04, strike_start_04, strike_end_04, "C");
} else {
 call_vol_04 = agg_vol(date04, strike_start, strike_end, "C");
}

plot call_vol_05;
if date_strike_ranges{
 call_vol_05 = agg_vol(date05, strike_start_05, strike_end_05, "C");
} else {
 call_vol_05 = agg_vol(date05, strike_start, strike_end, "C");
}

plot call_vol_06;
if date_strike_ranges{
 call_vol_06 = agg_vol(date06, strike_start_06, strike_end_06, "C");
} else {
 call_vol_06 = agg_vol(date06, strike_start, strike_end, "C");
}


plot call_vol_07;
if date_strike_ranges{
 call_vol_07 = agg_vol(date07, strike_start_07, strike_end_07, "C");
} else {
 call_vol_07 = agg_vol(date07, strike_start, strike_end, "C");
}

plot call_vol_08;
if date_strike_ranges{
 call_vol_08 = agg_vol(date08, strike_start_08, strike_end_08, "C");
} else {
 call_vol_08 = agg_vol(date08, strike_start, strike_end, "C");
}




# Data is visualized with an overlayed histogram. 
# Because alpha values cannot be passed to CreateColor, please remember to set white to 99 alpha under RGB. 

call_vol_01.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
call_vol_02.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
call_vol_03.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
call_vol_04.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
call_vol_05.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
call_vol_06.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
call_vol_07.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
call_vol_08.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);

call_vol_01.SetDefaultColor(Color.WHITE);
call_vol_02.SetDefaultColor(CreateColor(35,158,201));
call_vol_03.SetDefaultColor(CreateColor(88,255,21));
call_vol_04.SetDefaultColor(CreateColor(255,95,95));
call_vol_05.SetDefaultColor(CreateColor(213,195,0));
call_vol_06.SetDefaultColor(CreateColor(210,24,248));
call_vol_07.SetDefaultColor(CreateColor(81,93,255));
call_vol_08.SetDefaultColor(CreateColor(255,134,230));

addLabel(1, date01, Color.WHITE);
addLabel(date_strike_ranges, strike_start_01 + "-" + strike_end_01, Color.WHITE);

addLabel(1, date02, CreateColor(35,158,201));
addLabel(date_strike_ranges, strike_start_02 + "-" + strike_end_02, CreateColor(35,158,201));

addLabel(1, date03, CreateColor(88,255,21));
addLabel(date_strike_ranges, strike_start_03 + "-" + strike_end_03, CreateColor(88,255,21));

addLabel(1, date04, CreateColor(255,95,95));
addLabel(date_strike_ranges, strike_start_04 + "-" + strike_end_04, CreateColor(255,95,95));

addLabel(1, date05, CreateColor(213,195,0));
addLabel(date_strike_ranges, strike_start_05 + "-" + strike_end_05, CreateColor(213,195,0));

addLabel(1, date06, CreateColor(210,24,248));
addLabel(date_strike_ranges, strike_start_06 + "-" + strike_end_06, CreateColor(210,24,248));

addLabel(1, date07, CreateColor(81,93,255));
addLabel(date_strike_ranges, strike_start_07 + "-" + strike_end_07, CreateColor(81,93,255));

addLabel(1, date08, CreateColor(255,134,230));
addLabel(date_strike_ranges, strike_start_08 + "-" + strike_end_08, CreateColor(255,134,230));








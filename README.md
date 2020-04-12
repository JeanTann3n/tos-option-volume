# tos-option-volume
Thinkscripts to pull call and option volume and plot them as an overlayed histogram. 
Initial script by JeanTann3n. 
Refactored and optimized by Wahakalaka. 

Make sure to set same-day date alpha transparency in the Study options. CreateColor does not allow alpha to be specified. 

![Options Volume](/screenshot.PNG)

# Notes

There is a lot of data being processed, so we recommend using a longer aggregation period or a shorter time interval if you're seeing performance issues.
Currently strikes are pulled in dollar increments.
Something like SPSX is going to be difficult because of the number of strikes.
It might take a while to load everything, be patient.
Futures (/ES, etc) aren't working currently due to the way option symbols are matched. (Todo hardcode a fix for /ES)
Strike ranges and expirations need to be set manually, right now. On the plus side this allows for effective filtering to a specific delta range if you look up what the strike range is for the equivalent delta range.
The volume data is not raw order data, so specific sale prices, order sizes, etc. cannot be inferred.

Feel free to ping @jeantann3n or @Wahakalaka with questions or suggestions! 

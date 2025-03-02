# 淬火处理
```gnuplot {cmd=true output="html" hide}
set terminal svg enhanced font "SimHei,12"
set title "淬火处理温度-时间曲线" font ",14"
set xlabel "时间 (h)"
set ylabel "温度 (℃)"
set grid
set key off
set xrange [0:10]
set yrange [0:1000]

# Define piecewise quenching temperature function
f(x) = x < 2 ? 300 + 300*x : \
    x < 3 ? 900 : \
    900 * exp(-2*(x-3))

# Plot the function with proper styling
plot f(x) with lines lw 2 lt rgb "red" title ""
```
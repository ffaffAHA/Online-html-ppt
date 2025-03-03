# 设置输出和坐标轴（保持不变）
set terminal pngcairo enhanced font "Arial,12" size 1000,800
set output 'fe_c_phase_diagram.png'
set xlabel "Carbon Content (wt%)"
set ylabel "Temperature (°C)"
set xrange [0:6.7]
set yrange [0:1600]
set title "Iron-Carbon Phase Diagram"
set key top right

# 定义线条样式（保持不变）
set style line 1 lc rgb "red" lw 2
set style line 2 lc rgb "blue" lw 2
set style line 3 lc rgb "green" lw 2
set style line 4 lc rgb "black" lw 2 dt 2

# 绘制相图（更新索引）
plot \
  "fe_c_data.dat" index 0 title "Liquidus" with lines ls 1, \
  "" index 1 title "Solidus" with lines ls 1, \
  "" index 2 title "A3 Line" with lines ls 2, \
  "" index 3 title "A1 Line" with lines ls 3, \
  "" index 4 title "Eutectic" with lines ls 4, \
  "" index 5 title "Cementite" with lines ls 4

# 添加文本标签（保持不变）
set label "Austenite (γ)" at 2.5,1000 rotate by 30
set label "Ferrite (α)" at 0.5,800
set label "Cementite (Fe3C)" at 5.5,500
set label "L + γ" at 3.5,1400
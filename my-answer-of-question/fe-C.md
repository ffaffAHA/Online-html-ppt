```gnuplot {cmd output="html"}
# 设置输出格式（可保存为PDF、PNG或直接显示）
set terminal pngcairo enhanced font "Arial,12" size 1000,600
set output "iron_cooling_curve.png"

# 坐标轴标签和标题
set xlabel "时间 (单位)"
set ylabel "温度 (℃)"
set title "纯铁的冷却曲线及晶格结构变化"
set grid lt 0 lw 0.5   # 设置虚线网格

# 坐标轴范围
set xrange [0:10]
set yrange [0:1600]

# 定义相变温度和平台时间范围
T_melting = 1538     # 熔点（δ-Fe → 液态）
T_gamma_delta = 1394 # γ-Fe → δ-Fe
T_alpha_gamma = 912  # α-Fe → γ-Fe
T_curie = 770        # 居里温度

# 定义分段冷却曲线函数（阶梯式）
temperature(x) = \
  (x <= 2) ? T_melting : \
  (x <= 4) ? T_gamma_delta : \
  (x <= 6) ? T_alpha_gamma : \
  (x > 6)  ? 25 : 0  # 冷却至室温（25℃）

# 绘制冷却曲线
plot temperature(x) with lines lw 2 lc "blue" title "冷却曲线"

# 添加相变平台标注（红色水平线）
set arrow from 0,T_melting to 2,T_melting nohead lw 3 lc "red"
set arrow from 2,T_gamma_delta to 4,T_gamma_delta nohead lw 3 lc "red"
set arrow from 4,T_alpha_gamma to 6,T_alpha_gamma nohead lw 3 lc "red"

# 居里温度虚线
set arrow from 6,T_curie to 10,T_curie nohead lw 1.5 lc "gray" dt "--"

# 标注晶格结构和相变
set label "液态 (L)" at 1,T_melting+50 center
set label "δ-Fe (体心立方)" at 3,T_gamma_delta+50 center
set label "γ-Fe (面心立方)" at 5,T_alpha_gamma+50 center
set label "α-Fe (体心立方)" at 8,300 center
set label "居里温度 (770℃)" at 8,T_curie-50 center tc "gray"

# 添加冷却方向箭头
set arrow from 6,800 to 8,800 heads size 0.1,30 lc "blue"

# 刷新图形
replot
```

import matplotlib.pyplot as plt
import numpy as np

# 相变温度点 (单位：℃)
T_melting = 1538    # 熔点（δ-Fe → 液态）
T_gamma_delta = 1394  # γ-Fe → δ-Fe
T_alpha_gamma = 912   # α-Fe → γ-Fe
T_curie = 770        # 居里温度（磁性变化）

# 模拟时间轴（假设总时间=10单位）
time = np.linspace(0, 10, 1000)
temperature = np.zeros_like(time)

# 定义冷却曲线（从液态到室温）
# 假设每个相变平台持续2个时间单位
platform_duration = 2
time_segments = [
    (0, 2, T_melting),          # 液态平台
    (2, 4, T_gamma_delta),      # δ-Fe平台
    (4, 6, T_alpha_gamma),      # γ-Fe平台
    (6, 10, 25)                 # 冷却至室温（α-Fe）
]

# 生成温度曲线
for (t_start, t_end, T) in time_segments:
    mask = (time >= t_start) & (time <= t_end)
    temperature[mask] = T

# 绘制图表
plt.figure(figsize=(10, 6))
plt.plot(time, temperature, 'b-', linewidth=2, label="冷却曲线")

# 标注相变平台
plt.hlines(T_melting, 0, 2, colors='r', linestyles='solid', linewidth=3)
plt.hlines(T_gamma_delta, 2, 4, colors='r', linestyles='solid', linewidth=3)
plt.hlines(T_alpha_gamma, 4, 6, colors='r', linestyles='solid', linewidth=3)

# 标注居里温度（虚线）
plt.hlines(T_curie, 6, 10, colors='gray', linestyles='dashed', linewidth=1.5)

# 添加晶格结构标注
plt.text(1, T_melting+50, '液态 (L)', ha='center', fontsize=10)
plt.text(3, T_gamma_delta+50, 'δ-Fe (体心立方)', ha='center', fontsize=10)
plt.text(5, T_alpha_gamma+50, 'γ-Fe (面心立方)', ha='center', fontsize=10)
plt.text(8, 300, 'α-Fe (体心立方)', ha='center', fontsize=10)
plt.text(8, T_curie-50, '居里温度\n(770℃)', ha='center', fontsize=9, color='gray')

# 添加箭头表示冷却方向
plt.annotate('', xy=(6, 800), xytext=(8, 800),
             arrowprops=dict(arrowstyle='->', color='blue'))

# 坐标轴标签和标题
plt.xlabel('时间 (单位)', fontsize=12)
plt.ylabel('温度 (℃)', fontsize=12)
plt.title('纯铁的冷却曲线及晶格结构变化', fontsize=14)
plt.grid(linestyle='--', alpha=0.5)
plt.ylim(0, 1600)
plt.tight_layout()
plt.show()
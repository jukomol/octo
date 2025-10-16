---
title: "Smart Agricultural Operator Monitoring System (AG-OMS V2)"
authors: "J. Uddin, B. Lowndes, A. Yoder"
venue: "IEEE International Conference on Agricultural Technologies (AgriTech), 2025"
doi: "10.1109/agritech.2025.00000"
pdf: "#"
code: "https://github.com/jukomol"
---

## Abstract

Agriculture remains one of the most hazardous industries, with tractor-related incidents accounting for a significant proportion of fatal and non-fatal injuries. This paper presents AG-OMS V2, an advanced operator monitoring system that leverages computer vision and machine learning to enhance tractor operator safety.

## Key Contributions

1. **Real-time Posture Monitoring**: Novel pose estimation algorithms for detecting unsafe operator positions
2. **Context-Aware Alerts**: Intelligent alert system that considers operational context to reduce false alarms
3. **Validated Dataset**: Comprehensive dataset of synthetic and real-world tractor operator scenarios

## Methodology

Our system employs a multi-stage pipeline:

- **Detection Stage**: YOLOv8-based operator detection and tracking
- **Pose Estimation**: MediaPipe-based skeletal keypoint extraction
- **Risk Assessment**: Machine learning classifier for safety state evaluation
- **Alert Generation**: Context-aware notification system

## Results

Evaluation on 500+ hours of video data demonstrates:

- 95.3% accuracy in unsafe posture detection
- 87.1% reduction in false positive alerts compared to baseline systems
- Real-time performance (30+ FPS) on edge devices

## Impact

AG-OMS V2 has the potential to significantly reduce tractor-related injuries by providing operators with timely feedback about unsafe behaviors, ultimately saving lives in agricultural settings.

## Citation

If you use this work, please cite:

```bibtex
@inproceedings{uddin2025agoms,
  title={Smart Agricultural Operator Monitoring System (AG-OMS V2)},
  author={Uddin, Jahir and Lowndes, Brandon and Yoder, Ann},
  booktitle={IEEE International Conference on Agricultural Technologies},
  year={2025}
}
```

# Content Creation Guide

This guide provides comprehensive instructions and examples for creating all types of content on your academic portfolio website using GitHub Issues as a content management system.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Creating a Blog Post](#creating-a-blog-post)
- [Adding a Publication](#adding-a-publication)
- [Adding a Presentation](#adding-a-presentation)
- [Adding a Resource](#adding-a-resource)
- [Updating Your Bio](#updating-your-bio)
- [Updating Your CV](#updating-your-cv)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Overview

Your academic portfolio uses **GitHub Issues as a Content Management System (CMS)**. Each content type (blog post, publication, presentation, resource, bio, or CV) is created by opening a GitHub issue with the appropriate label and template.

### How It Works

1. **Create an Issue**: Use predefined templates to create content
2. **Automatic Sync**: GitHub Actions automatically syncs the content to your website
3. **Live in Minutes**: Your content appears on your site within a few minutes

### Content Types and Labels

| Content Type | Label | Destination | Example |
|-------------|-------|-------------|---------|
| Blog Post | `post` | `_posts/` | Research updates, tutorials |
| Publication | `pub` | `_pubs/` | Journal articles, conference papers |
| Presentation | `presentation` | `_talks/` | Conference talks, posters |
| Resource | `resource` | `_resources/` | Datasets, code repositories |
| Bio Update | `bio` | `_data/bio.yml` | Profile information |
| CV Update | `cv` | `_data/bio.yml` | CV download link |

---

## Getting Started

### Prerequisites

- GitHub account
- Access to your repository (jukomol/octo)
- Basic understanding of Markdown and YAML

### Quick Start Steps

1. Navigate to your repository: `https://github.com/jukomol/octo`
2. Click on the **Issues** tab
3. Click **New Issue**
4. Select the appropriate template
5. Fill in the content
6. Click **Submit new issue**
7. Wait 1-2 minutes for automatic sync
8. Check your website to see the new content

---

## Creating a Blog Post

Blog posts are perfect for sharing research updates, tutorials, thoughts, and insights about your work.

### Step-by-Step Instructions

1. **Go to Issues Tab**
   - Navigate to `https://github.com/jukomol/octo/issues`

2. **Create New Issue**
   - Click the green **New Issue** button

3. **Select Template**
   - Choose **📝 New Blog Post**

4. **Fill in the Template**
   - The template provides a pre-filled YAML front matter structure
   - Edit the fields between the `---` markers

5. **Add Your Content**
   - Write your blog post content in Markdown below the front matter

6. **Submit**
   - Click **Submit new issue**

### Blog Post Example 1: Research Update

```markdown
---
title: "Introducing AG-OMS V2: Next-Gen Tractor Safety System"
date: 2025-10-16
tags: [agriculture, computer vision, safety, research]
summary: "Announcing the latest version of our Agricultural Operator Monitoring System with improved accuracy and real-time performance."
cover: https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200
---

I'm excited to announce the release of AG-OMS V2, our next-generation Agricultural Operator Monitoring System that significantly improves tractor operator safety.

## What's New in V2?

### Enhanced Accuracy
Our new system achieves **95.3% accuracy** in detecting unsafe operator postures, a 12% improvement over the previous version.

### Real-Time Performance
AG-OMS V2 runs at **30+ FPS** on edge devices, enabling real-time feedback to operators.

### Context-Aware Alerts
The system now considers operational context, reducing false alarms by **87.1%** compared to baseline systems.

## Technical Highlights

We've integrated several cutting-edge technologies:

- **YOLOv8** for robust operator detection
- **MediaPipe** for accurate pose estimation
- **Custom ML classifier** for risk assessment
- **Smart alert system** for contextual notifications

## Impact

This work has the potential to significantly reduce tractor-related injuries in agricultural settings. We've validated the system on **500+ hours** of video data, including both synthetic and real-world scenarios.

## What's Next?

We're currently working with local farms to conduct field trials. Stay tuned for updates on deployment and real-world validation!

## Learn More

- Read the full paper: [Link to publication](#)
- Watch the demo: [YouTube video](#)
- Try the code: [GitHub repository](#)

---

*This research is supported by the University of Nebraska Medical Center and collaboration with agricultural safety experts.*
```

### Blog Post Example 2: Tutorial

```markdown
---
title: "Getting Started with YOLOv8 for Object Detection"
date: 2025-10-10
tags: [tutorial, computer vision, yolo, python]
summary: "A beginner-friendly guide to implementing YOLOv8 for object detection in your research projects."
cover: https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200
---

Object detection is a fundamental task in computer vision, and YOLOv8 is one of the most powerful tools available. In this tutorial, I'll walk you through implementing YOLOv8 for your own detection tasks.

## Prerequisites

Before we begin, make sure you have:

- Python 3.8 or higher
- Basic understanding of Python and machine learning
- A dataset with labeled images

## Installation

First, install the required packages:

```bash
pip install ultralytics opencv-python matplotlib
```

## Basic Usage

Here's a simple example to get you started:

```python
from ultralytics import YOLO

# Load a pre-trained model
model = YOLO('yolov8n.pt')

# Run inference on an image
results = model('image.jpg')

# Display results
results[0].show()
```

## Training on Custom Data

To train on your own dataset:

```python
# Train the model
model.train(
    data='data.yaml',
    epochs=100,
    imgsz=640,
    batch=16
)
```

## Tips for Better Performance

1. **Data Quality**: Ensure your labels are accurate
2. **Augmentation**: Use augmentation to improve generalization
3. **Hyperparameter Tuning**: Experiment with learning rate and batch size
4. **Validation**: Always validate on a separate test set

## Conclusion

YOLOv8 is an excellent choice for object detection tasks. With this foundation, you can adapt it to your specific research needs.

Have questions? Feel free to reach out!
```

### Blog Post Example 3: Conference Experience

```markdown
---
title: "Reflections from IEEE AgriTech 2025"
date: 2025-09-25
tags: [conference, agriculture, networking, research]
summary: "Key takeaways and memorable moments from presenting AG-OMS V2 at IEEE AgriTech 2025."
cover: https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200
---

Last week, I had the privilege of presenting our AG-OMS V2 system at the IEEE International Conference on Agricultural Technologies in California. It was an incredible experience!

## The Presentation

Presenting our work on AI-powered tractor safety to an audience of agricultural technology experts was both exciting and nerve-wracking. The reception was overwhelmingly positive, with several attendees interested in potential collaborations.

## Key Takeaways

### 1. Interdisciplinary Collaboration is Crucial
The most impactful research in agricultural technology comes from combining expertise in computer science, agricultural engineering, and occupational health.

### 2. Real-World Deployment Challenges
Many researchers echoed similar challenges in deploying AI systems in agricultural settings:
- Harsh environmental conditions
- Limited connectivity
- Need for edge computing solutions

### 3. Growing Interest in AI for Safety
There's increasing recognition that AI can play a vital role in improving safety across various agricultural operations.

## Networking Highlights

I connected with:
- Researchers from UC Davis working on vineyard automation
- Engineers from John Deere exploring autonomous systems
- Safety experts from OSHA interested in our monitoring approach

## Looking Forward

The conference reinforced my commitment to this research area and opened doors for future collaborations. Special thanks to my advisors and the UNMC team for their support!

## Resources

- [Conference proceedings](#)
- [My presentation slides](#)
- [Photos from the event](#)
```

### Front Matter Field Descriptions

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | Yes | Post title | "Understanding Tractor Safety" |
| `date` | Yes | Publication date (YYYY-MM-DD) | 2025-10-16 |
| `tags` | No | List of tags for categorization | [research, AI, safety] |
| `summary` | Yes | Brief description (1-2 sentences) | "Exploring AI-powered safety..." |
| `cover` | No | Header image URL | https://... |

### Tips for Great Blog Posts

- **Compelling Titles**: Make them descriptive and engaging
- **Clear Summary**: Write a concise 1-2 sentence summary
- **Use Headers**: Break content into sections with `##` and `###`
- **Add Visuals**: Include images, code blocks, and examples
- **Link to Resources**: Reference papers, code, and related work
- **Proofread**: Check for typos and clarity before submitting

---

## Adding a Publication

Publications showcase your research papers, conference proceedings, and academic work.

### Step-by-Step Instructions

1. **Go to Issues Tab**
   - Navigate to `https://github.com/jukomol/octo/issues`

2. **Create New Issue**
   - Click **New Issue**

3. **Select Template**
   - Choose **📚 New Publication**

4. **Fill in Front Matter**
   - Complete all required fields
   - Add optional fields as needed

5. **Add Abstract/Description**
   - Write your abstract or paper description in Markdown

6. **Submit**
   - Click **Submit new issue**

### Publication Example 1: Conference Paper

```markdown
---
title: "Smart Agricultural Operator Monitoring System (AG-OMS V2)"
authors: "J. Uddin, B. Lowndes, A. Yoder"
venue: "IEEE International Conference on Agricultural Technologies (AgriTech), 2025"
doi: "10.1109/agritech.2025.00000"
pdf: https://ieeexplore.ieee.org/document/12345678
code: https://github.com/jukomol/ag-oms-v2
---

## Abstract

Agriculture remains one of the most hazardous industries, with tractor-related incidents accounting for a significant proportion of fatal and non-fatal injuries. This paper presents AG-OMS V2, an advanced operator monitoring system that leverages computer vision and machine learning to enhance tractor operator safety.

## Key Contributions

1. **Real-time Posture Monitoring**: Novel pose estimation algorithms for detecting unsafe operator positions during various agricultural operations
2. **Context-Aware Alerts**: Intelligent alert system that considers operational context to reduce false alarms and alert fatigue
3. **Validated Dataset**: Comprehensive dataset of 500+ hours of synthetic and real-world tractor operator scenarios

## Methodology

Our system employs a multi-stage pipeline:

### Detection Stage
- YOLOv8-based operator detection with 99.2% accuracy
- Real-time tracking across varying lighting and weather conditions
- Robust to occlusions and challenging camera angles

### Pose Estimation
- MediaPipe-based skeletal keypoint extraction
- 17 key body landmarks tracked at 30 FPS
- Normalized coordinates for scale invariance

### Risk Assessment
- Custom machine learning classifier
- Features engineered from pose data and operational context
- Binary classification: safe vs. unsafe posture

### Alert Generation
- Context-aware notification system
- Configurable sensitivity levels
- Multi-modal feedback (visual, audio, haptic)

## Results

Evaluation on our comprehensive dataset demonstrates:

- **95.3% accuracy** in unsafe posture detection
- **87.1% reduction** in false positive alerts compared to baseline systems
- **Real-time performance** (30+ FPS) on edge devices (NVIDIA Jetson)
- **Low latency** (<100ms) from detection to alert

## Dataset

We release a dataset containing:
- 500+ hours of video footage
- 50,000+ labeled frames
- Multiple camera angles and lighting conditions
- Both synthetic (simulation) and real-world scenarios
- Annotations for 12 different unsafe posture types

## Impact

AG-OMS V2 has the potential to significantly reduce tractor-related injuries by:
- Providing real-time feedback to operators
- Alerting supervisors to unsafe behaviors
- Generating data for safety training programs
- Identifying high-risk operations for intervention

## Future Work

- Extended field trials with partner farms
- Integration with tractor control systems
- Multi-operator scenarios
- Additional safety metrics (e.g., proximity alerts)

## Acknowledgments

This research was supported by the University of Nebraska Medical Center and conducted in collaboration with agricultural safety experts from the National Institute for Occupational Safety and Health (NIOSH).

## Citation

If you use this work, please cite:

```bibtex
@inproceedings{uddin2025agoms,
  title={Smart Agricultural Operator Monitoring System (AG-OMS V2)},
  author={Uddin, Jahir and Lowndes, Brandon and Yoder, Ann},
  booktitle={IEEE International Conference on Agricultural Technologies},
  pages={1--8},
  year={2025},
  organization={IEEE},
  doi={10.1109/agritech.2025.00000}
}
```

## Resources

- **Paper**: [IEEE Xplore](https://ieeexplore.ieee.org/document/12345678)
- **Code**: [GitHub Repository](https://github.com/jukomol/ag-oms-v2)
- **Dataset**: [Zenodo](https://zenodo.org/record/12345678)
- **Demo Video**: [YouTube](https://youtube.com/watch?v=demo)
```

### Publication Example 2: Journal Article

```markdown
---
title: "Deep Learning Approaches for Occupational Safety in Agricultural Settings: A Comprehensive Review"
authors: "J. Uddin, M. Johnson, B. Lowndes"
venue: "Journal of Agricultural Safety and Health, Vol. 29, No. 2, 2025"
doi: "10.13031/jash.2025.0123"
pdf: https://elibrary.asabe.org/abstract.asp?aid=54321
code: 
---

## Abstract

Occupational safety in agriculture has increasingly benefited from advances in deep learning and computer vision. This comprehensive review examines the state-of-the-art in AI-powered safety systems for agricultural operations, with emphasis on real-time monitoring, hazard detection, and injury prevention. We analyze 127 peer-reviewed papers published between 2018 and 2024, identifying key trends, challenges, and future research directions.

## Introduction

Agricultural work environments present unique safety challenges due to:
- Complex machinery and equipment
- Varying environmental conditions
- Remote and isolated work locations
- Multiple simultaneous hazards

Traditional safety approaches rely on periodic inspections and manual monitoring, which are labor-intensive and often reactive rather than preventive. Recent advances in deep learning offer new opportunities for automated, continuous safety monitoring.

## Methodology

### Literature Search Strategy
- Databases: IEEE Xplore, ACM Digital Library, PubMed, Scopus
- Keywords: "agricultural safety", "deep learning", "computer vision", "occupational health"
- Date range: 2018-2024
- Initial results: 342 papers
- After screening: 127 papers included

### Classification Taxonomy
We categorize papers into six main areas:
1. Operator monitoring and ergonomics
2. Machinery hazard detection
3. Environmental safety assessment
4. Personal protective equipment (PPE) compliance
5. Livestock interaction safety
6. Chemical and biological hazard detection

## Key Findings

### Operator Monitoring (35 papers)
- Pose estimation for ergonomic assessment
- Fatigue and distraction detection
- Fall detection systems
- Performance: 85-98% accuracy across studies

### Machinery Hazard Detection (28 papers)
- Object detection for collision avoidance
- Predictive maintenance using vibration analysis
- Anomaly detection in operation patterns
- Performance: 82-95% precision/recall

### PPE Compliance (22 papers)
- Helmet and vest detection
- Glove and boot verification
- Real-time compliance monitoring
- Performance: 90-97% accuracy

## Challenges and Gaps

1. **Data Scarcity**: Limited publicly available datasets
2. **Generalization**: Models trained on specific farms/conditions
3. **Edge Deployment**: Computational constraints in field settings
4. **Privacy Concerns**: Worker monitoring ethics
5. **Integration**: Compatibility with existing systems

## Future Directions

### Near-term (1-3 years)
- Standardized benchmark datasets
- Transfer learning for domain adaptation
- Edge-optimized model architectures
- Multi-modal sensor fusion

### Long-term (3-5 years)
- Explainable AI for safety decisions
- Federated learning for privacy-preserving training
- Integration with IoT and smart farm systems
- Automated intervention systems

## Conclusion

Deep learning has demonstrated significant potential for improving agricultural safety. However, successful deployment requires addressing challenges in data availability, model generalization, and practical integration. Future research should focus on creating robust, generalizable systems that can operate effectively in diverse agricultural environments.

## Acknowledgments

The authors thank the University of Nebraska Medical Center for supporting this research.
```

### Publication Example 3: Workshop Paper

```markdown
---
title: "Synthetic Data Generation for Agricultural Safety Research"
authors: "J. Uddin, C. Peterson"
venue: "Workshop on Computer Vision for Agriculture (CV4Ag), CVPR 2025"
doi: "10.48550/arXiv.2025.12345"
pdf: https://arxiv.org/pdf/2025.12345.pdf
code: https://github.com/jukomol/synthetic-ag-data
---

## Abstract

Training deep learning models for agricultural safety applications is hindered by the scarcity of labeled data. We present a framework for generating photorealistic synthetic data of agricultural operations using game engines and procedural generation techniques. Our approach produces diverse, automatically labeled datasets that improve model performance when combined with limited real-world data.

## Motivation

Real-world agricultural data collection faces several challenges:
- **Safety concerns**: Capturing unsafe scenarios is dangerous
- **Seasonal variation**: Limited temporal coverage
- **Label cost**: Manual annotation is expensive
- **Privacy issues**: Worker consent and data protection

Synthetic data offers a solution by enabling:
- Safe collection of hazardous scenarios
- Controlled variation of conditions
- Automatic annotation at scale
- Privacy preservation

## Method

### 1. Environment Creation
We use Unreal Engine 5 to create photorealistic farm environments:
- Multiple terrain types (fields, barns, orchards)
- Weather conditions (sunny, cloudy, rainy, foggy)
- Time of day variations
- Realistic lighting and shadows

### 2. Asset Library
Our library includes:
- 15 tractor models with detailed interiors
- 50+ agricultural implements
- Diverse operator avatars with varied clothing
- Environmental elements (crops, animals, obstacles)

### 3. Scenario Generation
Procedural generation of scenarios:
- Random placement of objects and obstacles
- Varied operator poses and activities
- Different camera angles and distances
- Simulation of safe and unsafe conditions

### 4. Automatic Labeling
Automated extraction of:
- Bounding boxes for object detection
- Pose keypoints for human operators
- Semantic segmentation masks
- Safety labels (safe/unsafe)

## Results

### Dataset Statistics
- 100,000 synthetic images
- 20 different scenarios
- 500+ unique operator poses
- 10 camera angles per scenario

### Model Performance
Training on synthetic + real data:
- **Baseline** (real only): 87.3% accuracy
- **Synthetic only**: 82.1% accuracy
- **Combined**: 94.6% accuracy (+7.3%)

### Domain Gap Analysis
We analyze synthetic-to-real transfer:
- Color distribution matching
- Texture realism assessment
- Pose diversity coverage
- Lighting condition variety

## Key Findings

1. **Complementary Benefits**: Synthetic data complements real data, especially for rare scenarios
2. **Domain Randomization**: Helps bridge sim-to-real gap
3. **Label Quality**: Perfect labels from simulation improve training
4. **Scalability**: Easy to generate large, diverse datasets

## Code and Data

We release:
- Synthetic data generation pipeline
- 10,000 sample images with labels
- Evaluation scripts and benchmarks
- Documentation and tutorials

**GitHub**: https://github.com/jukomol/synthetic-ag-data

## Future Work

- Integration with physics simulation
- More diverse environmental conditions
- Expanded asset library
- User-friendly interface for researchers
```

### Front Matter Field Descriptions

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | Yes | Full paper title | "AG-OMS V2: Smart Monitoring..." |
| `authors` | Yes | All authors (comma-separated) | "J. Uddin, B. Lowndes, A. Yoder" |
| `venue` | Yes | Conference/journal name and year | "IEEE AgriTech, 2025" |
| `doi` | No | Digital Object Identifier | "10.1109/agritech.2025.00000" |
| `pdf` | No | Link to PDF | https://ieeexplore.ieee.org/... |
| `code` | No | Link to code repository | https://github.com/... |

### Tips for Publications

- **Complete Information**: Include all authors and accurate venue details
- **DOI First**: Add DOI as soon as it's available
- **Abstract**: Write a clear, comprehensive abstract
- **Keywords**: Include relevant keywords for searchability
- **Links**: Provide links to paper, code, and supplementary materials
- **Citation**: Include BibTeX for easy citation
- **Updates**: Edit the issue if publication details change (venue, DOI, etc.)

---

## Adding a Presentation

Presentations showcase your conference talks, posters, seminars, and guest lectures.

### Step-by-Step Instructions

1. **Go to Issues Tab**
2. **Create New Issue**
3. **Select Template**: Choose **🎤 New Presentation**
4. **Fill in Details**
5. **Add Description**
6. **Submit**

### Presentation Example 1: Conference Talk

```markdown
---
title: "AI for Safer Farms: Real-Time Operator Safety Monitoring"
event: "UNMC Research Day 2025"
date: 2025-09-20
slides: https://speakerdeck.com/jukomol/ai-safer-farms
video: https://youtube.com/watch?v=abc123xyz
---

## Talk Overview

I presented our latest work on the Agricultural Operator Monitoring System (AG-OMS V2) at UNMC Research Day, highlighting how AI and computer vision can improve safety in agricultural operations.

## Key Points Covered

### 1. Problem Statement
- Agriculture is one of the most hazardous industries
- Tractor-related injuries are a leading cause of fatalities
- Traditional safety measures are reactive, not proactive

### 2. Our Solution
- Real-time computer vision system
- Pose estimation for unsafe posture detection
- Context-aware alerts to minimize false alarms

### 3. Technical Approach
- YOLOv8 for operator detection
- MediaPipe for pose estimation
- Custom ML classifier for risk assessment
- Edge deployment on NVIDIA Jetson

### 4. Results
- 95.3% accuracy in detecting unsafe postures
- 87.1% reduction in false positives
- Real-time performance (30+ FPS)

### 5. Impact
- Potential to reduce tractor-related injuries
- Scalable to other agricultural operations
- Foundation for broader occupational safety applications

## Audience Engagement

The presentation generated excellent discussion, with questions about:
- Deployment in different farm environments
- Privacy considerations for operator monitoring
- Integration with existing farm management systems
- Potential for other agricultural machinery

## Recognition

This work received the **Best Graduate Research Presentation Award** in the Engineering & Technology category.

## Resources

- **Slides**: [View on Speaker Deck](https://speakerdeck.com/jukomol/ai-safer-farms)
- **Recording**: [Watch on YouTube](https://youtube.com/watch?v=abc123xyz)
- **Paper**: [IEEE AgriTech 2025](#)
- **Demo**: [Live demonstration](#)

## Acknowledgments

Special thanks to my advisors Dr. Brandon Lowndes and Dr. Ann Yoder, and the UNMC research community for their support and feedback.
```

### Presentation Example 2: Guest Lecture

```markdown
---
title: "Introduction to Computer Vision for Agricultural Applications"
event: "Guest Lecture - University of Nebraska-Lincoln, Biological Systems Engineering"
date: 2025-04-15
slides: https://drive.google.com/file/d/abc123/view
video: 
---

## Lecture Overview

I had the privilege of delivering a guest lecture to undergraduate and graduate students in the Biological Systems Engineering program at UNL. The lecture introduced fundamental computer vision concepts and their applications in modern agriculture.

## Learning Objectives

Students learned to:
1. Understand basic computer vision concepts and techniques
2. Recognize applications of CV in agriculture
3. Identify current challenges and opportunities
4. Explore career paths in agricultural technology

## Lecture Outline

### Part 1: Computer Vision Fundamentals (30 min)
- Image representation and processing
- Feature detection and extraction
- Object detection and classification
- Modern deep learning approaches

### Part 2: Agricultural Applications (40 min)
- Crop monitoring and yield prediction
- Automated harvesting systems
- Livestock monitoring and health assessment
- Safety and operator monitoring
- Precision agriculture

### Part 3: Hands-On Demo (20 min)
- Live demonstration of AG-OMS V2
- Interactive Q&A with the system
- Discussion of technical challenges

### Part 4: Career Perspectives (10 min)
- Research opportunities
- Industry applications
- Interdisciplinary collaboration
- Future trends

## Student Feedback

Received excellent feedback with students particularly interested in:
- Real-world deployment challenges
- Getting started with computer vision projects
- Opportunities for undergraduate research
- Internships and career paths

Several students expressed interest in pursuing related research projects!

## Resources Shared

- **Slides**: [Google Drive](https://drive.google.com/file/d/abc123/view)
- **Reading List**: Curated list of papers and tutorials
- **Code Examples**: Simple CV examples for beginners
- **Contact**: Open door for follow-up questions

## Follow-Up

Planning to mentor two interested students on a related project for their senior design course.
```

### Presentation Example 3: Poster Presentation

```markdown
---
title: "Context-Aware Safety Monitoring in Agricultural Operations"
event: "Midwest Occupational Safety and Health Symposium"
date: 2025-08-10
slides: https://figshare.com/articles/poster/context_aware_safety/12345678
video: 
---

## Poster Presentation

I presented a poster on our context-aware approach to agricultural safety monitoring at the Midwest Occupational Safety and Health Symposium in Chicago.

## Poster Highlights

### Problem
Traditional safety monitoring systems generate excessive false alarms, leading to alert fatigue and reduced effectiveness.

### Innovation
Our context-aware system considers:
- **Operational mode**: Different safety rules for different tasks
- **Environmental factors**: Weather, lighting, terrain
- **Historical patterns**: Learning from operator behavior
- **Equipment state**: Machinery status and configuration

### Methodology
1. Multi-sensor data fusion
2. Temporal context modeling
3. Machine learning classification
4. Adaptive alert thresholds

### Results
- 87.1% reduction in false alarms
- Maintained 95.3% detection accuracy
- Improved operator acceptance
- Lower cognitive burden

### Impact
More effective safety monitoring leads to:
- Better operator compliance
- Reduced injury risk
- Lower implementation costs
- Broader adoption potential

## Visitor Engagement

The poster attracted significant interest, with conversations including:
- Occupational health researchers
- Agricultural equipment manufacturers
- Farm safety coordinators
- OSHA representatives

## Networking Outcomes

Made valuable connections that led to:
- Potential collaboration with Iowa State University
- Interest from a major agricultural equipment manufacturer
- Invitation to submit to Journal of Agricultural Safety and Health

## Poster File

- **Download**: [Figshare](https://figshare.com/articles/poster/context_aware_safety/12345678)
- **Format**: PDF, 36" x 48"
- **Sections**: Problem, Methods, Results, Impact

## Next Steps

Following up with several contacts for potential research collaborations and field trial opportunities.
```

### Front Matter Field Descriptions

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | Yes | Presentation title | "AI for Safer Farms" |
| `event` | Yes | Event/conference name | "UNMC Research Day 2025" |
| `date` | Yes | Presentation date (YYYY-MM-DD) | 2025-09-20 |
| `slides` | No | Link to slides | https://speakerdeck.com/... |
| `video` | No | Link to recording | https://youtube.com/... |

### Tips for Presentations

- **Descriptive Title**: Make it clear and engaging
- **Event Details**: Include full event name and year
- **Slides**: Upload to Speaker Deck, Google Drive, or Figshare
- **Recording**: If available, link to YouTube or institutional repository
- **Context**: Explain the audience and setting
- **Outcomes**: Mention awards, feedback, or follow-up opportunities
- **Resources**: Provide links to all materials

---

## Adding a Resource

Resources include datasets, code repositories, tools, and other materials that support your research.

### Step-by-Step Instructions

1. **Go to Issues Tab**
2. **Create New Issue**
3. **Select Template**: Choose **🔗 New Resource**
4. **Fill in Details**
5. **Add Description**
6. **Submit**

### Resource Example 1: Dataset

```markdown
---
title: "AG-Safety-500: Tractor Operator Safety Video Dataset"
url: https://zenodo.org/record/12345678
category: "Dataset"
notes: "500+ hours of annotated video data for agricultural operator safety research"
---

## Dataset Overview

AG-Safety-500 is a comprehensive video dataset designed for training and evaluating computer vision models for agricultural operator safety monitoring. It contains both synthetic and real-world footage of tractor operations with detailed annotations.

## Dataset Contents

### Video Data
- **Total Duration**: 500+ hours
- **Resolution**: 1920x1080 (Full HD)
- **Frame Rate**: 30 FPS
- **Format**: MP4 (H.264 encoding)

### Annotations
- **Bounding Boxes**: Operator detection (50,000+ frames)
- **Pose Keypoints**: 17-point skeleton for each operator
- **Safety Labels**: Binary classification (safe/unsafe)
- **Posture Types**: 12 categories of unsafe postures
- **Context Labels**: Operation type, weather, time of day

### Data Split
- **Training**: 70% (350 hours)
- **Validation**: 15% (75 hours)
- **Test**: 15% (75 hours)

## Collection Methodology

### Synthetic Data (60%)
- Generated using Unreal Engine 5
- Photorealistic farm environments
- Procedurally generated scenarios
- Perfect ground-truth annotations

### Real-World Data (40%)
- Collected from 5 partner farms
- Multiple camera angles and conditions
- Manual annotation with expert validation
- IRB-approved data collection protocol

## Use Cases

This dataset supports research in:
- Operator detection and tracking
- Pose estimation in agricultural settings
- Unsafe posture classification
- Context-aware safety monitoring
- Synthetic-to-real transfer learning

## Annotation Format

Annotations provided in COCO JSON format:

```json
{
  "image_id": 12345,
  "category_id": 1,
  "bbox": [x, y, width, height],
  "keypoints": [x1, y1, v1, x2, y2, v2, ...],
  "safety_label": 0,
  "posture_type": "standing_on_tractor",
  "context": {
    "operation": "field_work",
    "weather": "sunny",
    "time_of_day": "afternoon"
  }
}
```

## Baseline Results

We provide baseline results using YOLOv8 and MediaPipe:

| Metric | Value |
|--------|-------|
| Detection AP@0.5 | 99.2% |
| Pose PCK@0.2 | 94.7% |
| Safety Classification | 95.3% |

## Download and Access

- **Platform**: Zenodo (DOI: 10.5281/zenodo.12345678)
- **Size**: 450 GB (compressed)
- **License**: CC BY-NC-SA 4.0
- **Format**: ZIP archives by data split

## Citation

If you use this dataset, please cite:

```bibtex
@dataset{uddin2025agsafety500,
  author = {Uddin, Jahir and Lowndes, Brandon and Yoder, Ann},
  title = {AG-Safety-500: Tractor Operator Safety Video Dataset},
  year = {2025},
  publisher = {Zenodo},
  doi = {10.5281/zenodo.12345678},
  url = {https://zenodo.org/record/12345678}
}
```

## Contact

For questions or issues with the dataset:
- **Email**: juddin@unmc.edu
- **GitHub Issues**: [Report a problem](https://github.com/jukomol/ag-safety-500/issues)

## Acknowledgments

Data collection was conducted with approval from the UNMC Institutional Review Board (IRB #12345) and in partnership with local agricultural operations.
```

### Resource Example 2: Code Repository

```markdown
---
title: "AG-OMS V2: Agricultural Operator Monitoring System"
url: https://github.com/jukomol/ag-oms-v2
category: "Software"
notes: "Open-source implementation of AG-OMS V2 with pre-trained models and deployment guides"
---

## Repository Overview

This repository contains the complete implementation of AG-OMS V2, an AI-powered system for monitoring tractor operator safety in real-time.

## Features

### Core Capabilities
- **Real-time Detection**: 30+ FPS on edge devices
- **Pose Estimation**: 17-point skeleton tracking
- **Safety Classification**: Binary safe/unsafe detection
- **Context Awareness**: Adaptive thresholds based on operation
- **Alert System**: Multi-modal notifications

### Technical Features
- YOLOv8 for operator detection
- MediaPipe for pose estimation
- PyTorch-based safety classifier
- ONNX export for deployment
- Docker containerization
- REST API for integration

## Installation

### Prerequisites
- Python 3.8+
- CUDA 11.8+ (for GPU support)
- 8GB RAM minimum
- Webcam or video input

### Quick Start

```bash
# Clone repository
git clone https://github.com/jukomol/ag-oms-v2.git
cd ag-oms-v2

# Install dependencies
pip install -r requirements.txt

# Download pre-trained models
python scripts/download_models.py

# Run demo
python demo.py --source webcam
```

## Usage Examples

### Basic Usage
```python
from agoms import SafetyMonitor

# Initialize monitor
monitor = SafetyMonitor()

# Process video
results = monitor.process_video('input.mp4')

# Get safety alerts
for frame_idx, alert in results.alerts:
    print(f"Frame {frame_idx}: {alert.message}")
```

### Real-time Monitoring
```python
from agoms import LiveMonitor

# Start live monitoring
monitor = LiveMonitor(camera_id=0)
monitor.start()

# Register alert callback
@monitor.on_alert
def handle_alert(alert):
    print(f"ALERT: {alert.type} - {alert.description}")
    
monitor.run()
```

### Custom Configuration
```python
config = {
    'detection_confidence': 0.7,
    'pose_confidence': 0.5,
    'alert_threshold': 0.8,
    'context_aware': True
}

monitor = SafetyMonitor(config=config)
```

## Pre-trained Models

We provide three model variants:

| Model | Size | Speed | Accuracy |
|-------|------|-------|----------|
| Nano | 6 MB | 60 FPS | 92.1% |
| Small | 22 MB | 45 FPS | 94.3% |
| Medium | 52 MB | 30 FPS | 95.3% |

All models are available in the `models/` directory.

## API Documentation

### REST API
```bash
# Start server
python api_server.py

# Process image
curl -X POST http://localhost:8000/detect \
  -F "image=@operator.jpg"

# Response
{
  "safe": false,
  "confidence": 0.94,
  "posture": "standing_on_tractor",
  "keypoints": [...],
  "alert": "Unsafe standing posture detected"
}
```

## Deployment

### Docker
```bash
docker build -t agoms-v2 .
docker run -p 8000:8000 agoms-v2
```

### Edge Devices (NVIDIA Jetson)
```bash
# Use ONNX runtime for optimization
python deploy/jetson_setup.py
python deploy/run_edge.py
```

## Performance Benchmarks

Tested on NVIDIA Jetson Xavier NX:

| Resolution | FPS | Latency | Power |
|------------|-----|---------|-------|
| 1920x1080 | 30 | 33ms | 15W |
| 1280x720 | 45 | 22ms | 12W |
| 640x480 | 60 | 16ms | 10W |

## Dataset

Training data available separately:
- **AG-Safety-500**: [Zenodo](https://zenodo.org/record/12345678)

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Areas for Contribution
- Support for additional camera types
- Improved pose estimation models
- Multi-operator tracking
- Mobile app interface
- Additional safety metrics

## License

MIT License - See [LICENSE](LICENSE) for details

## Citation

```bibtex
@software{uddin2025agoms,
  author = {Uddin, Jahir and Lowndes, Brandon and Yoder, Ann},
  title = {AG-OMS V2: Agricultural Operator Monitoring System},
  year = {2025},
  publisher = {GitHub},
  url = {https://github.com/jukomol/ag-oms-v2}
}
```

## Support

- **Issues**: [GitHub Issues](https://github.com/jukomol/ag-oms-v2/issues)
- **Discussions**: [GitHub Discussions](https://github.com/jukomol/ag-oms-v2/discussions)
- **Email**: juddin@unmc.edu

## Acknowledgments

Developed at the University of Nebraska Medical Center with support from NIOSH and collaboration with agricultural safety experts.
```

### Resource Example 3: Tool/Library

```markdown
---
title: "SafetyMetrics: Evaluation Toolkit for Safety Monitoring Systems"
url: https://github.com/jukomol/safety-metrics
category: "Tool"
notes: "Python library for evaluating and benchmarking safety monitoring systems"
---

## Overview

SafetyMetrics is a Python toolkit for evaluating safety monitoring systems with specialized metrics for occupational safety applications. It provides standardized evaluation protocols, visualization tools, and benchmarking capabilities.

## Key Features

### Evaluation Metrics
- **Detection Metrics**: Precision, Recall, F1, AP
- **Pose Metrics**: PCK, OKS, MPJPE
- **Safety Metrics**: Alert accuracy, false alarm rate, response time
- **Temporal Metrics**: Tracking consistency, ID switches
- **Fairness Metrics**: Performance across demographic groups

### Visualization Tools
- Confusion matrices
- Precision-recall curves
- Error distribution plots
- Temporal analysis charts
- Comparative benchmarks

### Analysis Features
- Statistical significance testing
- Error analysis and failure modes
- Computational profiling
- Real-time performance monitoring

## Installation

```bash
pip install safety-metrics
```

## Quick Start

```python
from safety_metrics import Evaluator

# Load ground truth and predictions
evaluator = Evaluator()
evaluator.load_ground_truth('gt.json')
evaluator.load_predictions('pred.json')

# Compute metrics
results = evaluator.compute_all()

# Print summary
print(results.summary())

# Generate report
results.save_report('evaluation_report.html')
```

## Usage Examples

### Safety Classification Evaluation
```python
from safety_metrics import SafetyClassifier

classifier = SafetyClassifier()
classifier.add_predictions(pred_labels, true_labels)

# Get metrics
accuracy = classifier.accuracy()
precision = classifier.precision()
recall = classifier.recall()
far = classifier.false_alarm_rate()

# Plot confusion matrix
classifier.plot_confusion_matrix()
```

### Pose Estimation Evaluation
```python
from safety_metrics import PoseEvaluator

pose_eval = PoseEvaluator()
pose_eval.add_batch(pred_keypoints, true_keypoints)

# Compute PCK at different thresholds
pck_02 = pose_eval.pck(threshold=0.2)
pck_05 = pose_eval.pck(threshold=0.5)

# Visualize errors
pose_eval.plot_keypoint_errors()
```

### Temporal Consistency
```python
from safety_metrics import TemporalEvaluator

temp_eval = TemporalEvaluator()
temp_eval.add_sequence(predictions, ground_truth)

# Compute temporal metrics
smoothness = temp_eval.smoothness()
consistency = temp_eval.consistency()
jitter = temp_eval.jitter()
```

## Benchmarking

Compare multiple models:

```python
from safety_metrics import Benchmark

benchmark = Benchmark()
benchmark.add_model('Model A', preds_a)
benchmark.add_model('Model B', preds_b)
benchmark.add_model('Model C', preds_c)

# Run comparison
results = benchmark.compare(ground_truth)

# Generate comparative report
benchmark.create_report('benchmark_results.html')
```

## Visualization

Generate comprehensive visualizations:

```python
from safety_metrics.viz import Visualizer

viz = Visualizer()

# Plot metrics comparison
viz.plot_metrics_comparison(results)

# Error distribution
viz.plot_error_distribution(errors)

# Performance over time
viz.plot_temporal_performance(temporal_results)

# Save all figures
viz.save_all('output_dir/')
```

## Advanced Features

### Custom Metrics
```python
from safety_metrics import CustomMetric

class MyMetric(CustomMetric):
    def compute(self, predictions, ground_truth):
        # Your custom logic
        return score
        
evaluator.register_metric('my_metric', MyMetric())
```

### Batch Processing
```python
from safety_metrics import BatchEvaluator

batch_eval = BatchEvaluator()
batch_eval.add_directory('predictions_dir/')
results = batch_eval.evaluate_all()
```

## Documentation

Full documentation available at: https://safety-metrics.readthedocs.io

## Examples

See the `examples/` directory for:
- Basic usage tutorials
- Advanced evaluation scenarios
- Benchmark configurations
- Custom metric implementations

## Contributing

Contributions welcome! Areas of interest:
- Additional evaluation metrics
- New visualization types
- Integration with popular frameworks
- Documentation improvements

## License

MIT License

## Citation

```bibtex
@software{uddin2025safetymetrics,
  author = {Uddin, Jahir},
  title = {SafetyMetrics: Evaluation Toolkit for Safety Monitoring Systems},
  year = {2025},
  publisher = {GitHub},
  url = {https://github.com/jukomol/safety-metrics}
}
```
```

### Front Matter Field Descriptions

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | Yes | Resource name | "AG-Safety-500 Dataset" |
| `url` | Yes | Link to resource | https://zenodo.org/... |
| `category` | Yes | Type of resource | "Dataset", "Software", "Tool" |
| `notes` | No | Brief description | "500+ hours of annotated data" |

### Tips for Resources

- **Clear Title**: Make it descriptive and findable
- **Direct Link**: Link to the actual resource, not a landing page
- **Category**: Use consistent categories (Dataset, Software, Tool, Tutorial, etc.)
- **Documentation**: Provide comprehensive usage instructions
- **Examples**: Include code snippets and usage examples
- **Citation**: Always include citation information
- **License**: Clearly state the license
- **Maintenance**: Keep links updated if resources move

---

## Updating Your Bio

Your bio appears on the homepage and CV page. You can update your personal information, photo, and professional details.

### Step-by-Step Instructions

1. **Go to Issues Tab**
2. **Create New Issue**
3. **Select Template**: Choose **👤 Update Bio**
4. **Fill in All Fields**
5. **Submit**

### Bio Update Example

```markdown
---
name: "Jahir Uddin"
tagline: "Expanding Horizons Through Interdisciplinary Research"
title: "PhD Candidate & Graduate Research Assistant"
institution: "University of Nebraska Medical Center"
email: "juddin@unmc.edu"
profiles:
  - {name: "Google Scholar", url: "https://scholar.google.com/citations?user=abc123"}
  - {name: "LinkedIn", url: "https://linkedin.com/in/jahiruddin"}
  - {name: "GitHub", url: "https://github.com/jukomol"}
  - {name: "ORCID", url: "https://orcid.org/0000-0001-2345-6789"}
  - {name: "ResearchGate", url: "https://researchgate.net/profile/Jahir-Uddin"}
photo: /assets/img/profile.jpg
download_cv: /assets/cv/Jahir_Uddin_CV.pdf
summary: |
  I am a PhD candidate at the University of Nebraska Medical Center, working at the intersection of computer vision, machine learning, and occupational safety. My research focuses on developing AI-enabled safety systems for agricultural and industrial settings, with emphasis on real-time operator monitoring and hazard detection.
  
  My current work on the Agricultural Operator Monitoring System (AG-OMS V2) leverages state-of-the-art computer vision techniques to improve tractor operator safety, addressing a critical need in one of the most hazardous industries. I am passionate about applying cutting-edge AI technology to solve real-world safety challenges and improving outcomes for workers in high-risk environments.
  
  I hold a Master's degree in Computer Science and bring experience in software engineering, computer vision, and human-computer interaction. I collaborate with agricultural safety experts, engineers, and occupational health researchers to ensure our solutions are practical, effective, and deployable in real-world settings.
---
```

### Field Descriptions

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `name` | Yes | Your full name | "Jahir Uddin" |
| `tagline` | Yes | Short professional tagline | "Expanding Horizons" |
| `title` | Yes | Current position/title | "PhD Candidate" |
| `institution` | Yes | Current institution | "UNMC" |
| `email` | Yes | Professional email | juddin@unmc.edu |
| `profiles` | No | List of online profiles | See example |
| `photo` | No | Path to profile photo | /assets/img/profile.jpg |
| `download_cv` | No | Path to CV PDF | /assets/cv/CV.pdf |
| `summary` | Yes | Professional bio (supports multi-line) | See example |

### Profile Options

Common profiles to include:
- Google Scholar
- LinkedIn
- GitHub
- ORCID
- ResearchGate
- Twitter/X
- Personal Website

Format:
```yaml
profiles:
  - {name: "Platform Name", url: "https://..."}
```

### Tips for Bio Updates

- **Professional Tone**: Write in third person
- **Concise Yet Comprehensive**: 2-3 paragraphs
- **Highlight Expertise**: Focus on research areas and skills
- **Current Information**: Keep position and affiliation up to date
- **Complete Profiles**: Include all relevant academic profiles
- **Photo**: Use a professional headshot (square format works best)

---

## Updating Your CV

Update the link to your CV PDF when you have a new version.

### Step-by-Step Instructions

1. **Upload New CV**
   - Place your CV PDF in `/assets/cv/`
   - Recommended naming: `FirstName_LastName_CV.pdf`

2. **Create Issue**
   - Go to Issues tab
   - Click New Issue
   - Select **📄 Update CV**

3. **Update Link**
   - Fill in the path to your new CV
   - Submit issue

### CV Update Example

```markdown
---
download_cv: /assets/cv/Jahir_Uddin_CV_2025.pdf
---

Updated CV with latest publications and presentations from 2025.
```

### Tips for CV Updates

- **Consistent Naming**: Use a clear, professional filename
- **Version Date**: Include year in filename for clarity
- **File Size**: Keep under 5 MB for fast loading
- **Regular Updates**: Update after major accomplishments
- **Backup**: Keep previous versions in case of issues

---

## Best Practices

### General Guidelines

1. **Use Templates**: Always start with the provided issue templates
2. **Valid YAML**: Ensure your front matter is properly formatted
3. **Test Locally**: If unsure, validate YAML using an online validator
4. **Clear Titles**: Use descriptive, searchable titles
5. **Complete Information**: Fill in all required fields
6. **Proofread**: Check for typos before submitting
7. **Links**: Verify all URLs work before adding them

### YAML Formatting Tips

#### Correct String Formatting
```yaml
# Simple strings (no quotes needed)
title: My Publication Title

# Strings with special characters (use quotes)
title: "Understanding AI: A Comprehensive Guide"

# Multi-line strings (use |)
summary: |
  This is a long summary
  that spans multiple lines
  and preserves formatting.
```

#### Correct List Formatting
```yaml
# List of simple items
tags: [AI, machine learning, safety]

# List of objects
profiles:
  - {name: "GitHub", url: "https://github.com/user"}
  - {name: "LinkedIn", url: "https://linkedin.com/in/user"}
```

#### Common YAML Mistakes to Avoid
```yaml
# ❌ WRONG: Missing quotes with colon
title: Note: Important Information

# ✅ CORRECT: Quotes protect special characters
title: "Note: Important Information"

# ❌ WRONG: Incorrect list format
tags: AI, machine learning, safety

# ✅ CORRECT: Use brackets or separate lines
tags: [AI, machine learning, safety]
# OR
tags:
  - AI
  - machine learning
  - safety
```

### Content Quality Tips

1. **Engaging Titles**: Make them descriptive and interesting
2. **Clear Summaries**: Write concise 1-2 sentence summaries
3. **Proper Citations**: Include complete citation information
4. **Working Links**: Test all URLs before submitting
5. **Good Writing**: Use proper grammar and clear language
6. **Visuals**: Include relevant images when possible
7. **Keywords**: Use appropriate tags for discoverability

### Workflow Tips

1. **Draft First**: Write content in a text editor first
2. **Validate YAML**: Use a YAML validator to check syntax
3. **Save Drafts**: Save as draft if not ready to publish
4. **Preview**: After sync, preview on your site
5. **Edit Anytime**: Update issues to revise published content
6. **Close When Obsolete**: Close issues for outdated content

---

## Troubleshooting

### Content Not Appearing

**Problem**: You created an issue but don't see the content on your site.

**Solutions**:
1. Wait 2-3 minutes for sync to complete
2. Check that the issue has the correct label
3. Verify YAML front matter is valid
4. Check GitHub Actions for sync errors
5. Manually trigger sync workflow

### YAML Parsing Errors

**Problem**: Sync fails due to YAML errors.

**Solutions**:
1. Use a YAML validator: https://www.yamllint.com/
2. Check for missing quotes around special characters
3. Ensure proper indentation (use spaces, not tabs)
4. Verify list and object formatting
5. Look for unclosed quotes or brackets

### Missing Required Fields

**Problem**: Content created but missing information.

**Solutions**:
1. Check issue template for required fields
2. Edit the issue to add missing information
3. Wait for re-sync
4. Verify field names match exactly

### Links Not Working

**Problem**: URLs in your content don't work.

**Solutions**:
1. Verify URLs are complete (include https://)
2. Check for typos in the URL
3. Test links in a browser before adding
4. Use URL shorteners if needed
5. Encode special characters in URLs

### Sync Delays

**Problem**: Content takes too long to appear.

**Solutions**:
1. Normal delay is 1-2 minutes
2. Check GitHub Actions for workflow status
3. Manually trigger sync if needed
4. Verify GITHUB_TOKEN permissions
5. Check for rate limiting

### Images Not Displaying

**Problem**: Cover images or photos don't show.

**Solutions**:
1. Use direct image URLs (not webpage links)
2. Verify image URLs are publicly accessible
3. Use HTTPS URLs
4. Check image file format (PNG, JPG, WebP)
5. Consider file size (optimize large images)

### Getting Help

If you encounter issues:

1. **Check Documentation**: Review this guide and other docs
2. **Search Issues**: Look for similar problems
3. **Review Logs**: Check GitHub Actions workflow logs
4. **Test Locally**: Try building the site locally
5. **Ask for Help**: Open a new issue or contact maintainer

### Common Error Messages

| Error | Cause | Solution |
|-------|-------|----------|
| "Invalid YAML" | Syntax error in front matter | Validate YAML, fix syntax |
| "Missing required field: title" | No title in front matter | Add title field |
| "Failed to parse date" | Invalid date format | Use YYYY-MM-DD format |
| "Label not found" | Issue missing label | Add appropriate label |
| "Permission denied" | Token permissions issue | Check GITHUB_TOKEN scope |

---

## Additional Resources

### Learning Resources

- **Markdown Guide**: https://www.markdownguide.org/
- **YAML Tutorial**: https://yaml.org/spec/1.2/spec.html
- **Jekyll Documentation**: https://jekyllrb.com/docs/
- **GitHub Issues**: https://docs.github.com/en/issues

### Tools and Validators

- **YAML Validator**: https://www.yamllint.com/
- **Markdown Editor**: https://stackedit.io/
- **BibTeX Generator**: https://www.bibtex.com/
- **DOI Lookup**: https://www.doi.org/

### Video Tutorials

(If you create video tutorials, link them here)

### Support

- **Documentation**: `/docs` directory
- **GitHub Issues**: Report bugs or request features
- **Email**: juddin@unmc.edu

---

## Changelog

### Version 1.0 (October 2025)
- Initial release of comprehensive content creation guide
- Examples for all content types
- Step-by-step instructions
- Best practices and troubleshooting

---

**Last Updated**: October 16, 2025  
**Maintained by**: Jahir Uddin  
**Repository**: https://github.com/jukomol/octo

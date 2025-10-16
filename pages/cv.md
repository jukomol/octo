---
layout: default
title: Curriculum Vitae
permalink: /pages/cv.html
---

<div class="max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold mb-8">Curriculum Vitae</h1>
  
  {% if site.data.bio.download_cv %}
  <div class="mb-8">
    <a href="{{ site.data.bio.download_cv | relative_url }}" class="btn btn-primary" download>
      <svg class="inline w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
      Download Full CV (PDF)
    </a>
  </div>
  {% endif %}
  
  <div class="card mb-8">
    <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
    
    {% if site.data.bio.name %}
    <p class="mb-2"><strong>Name:</strong> {{ site.data.bio.name }}</p>
    {% endif %}
    
    {% if site.data.bio.title %}
    <p class="mb-2"><strong>Position:</strong> {{ site.data.bio.title }}</p>
    {% endif %}
    
    {% if site.data.bio.institution %}
    <p class="mb-2"><strong>Institution:</strong> {{ site.data.bio.institution }}</p>
    {% endif %}
    
    {% if site.data.bio.email %}
    <p class="mb-2"><strong>Email:</strong> <a href="mailto:{{ site.data.bio.email }}">{{ site.data.bio.email }}</a></p>
    {% endif %}
  </div>
  
  {% if site.data.bio.summary %}
  <div class="card mb-8">
    <h2 class="text-2xl font-bold mb-4">About</h2>
    <div class="prose max-w-none">
      {{ site.data.bio.summary | markdownify }}
    </div>
  </div>
  {% endif %}
  
  <div class="card">
    <h2 class="text-2xl font-bold mb-4">Online Profiles</h2>
    {% if site.data.bio.profiles and site.data.bio.profiles.size > 0 %}
    <ul class="space-y-2">
      {% for profile in site.data.bio.profiles %}
      <li>
        <a href="{{ profile.url }}" target="_blank" rel="noopener" class="flex items-center">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
          </svg>
          {{ profile.name }}
        </a>
      </li>
      {% endfor %}
    </ul>
    {% else %}
    <p class="text-gray-600">No profiles available.</p>
    {% endif %}
  </div>
</div>

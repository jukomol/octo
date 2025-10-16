---
layout: default
title: Presentations
permalink: /pages/presentations.html
---

<div class="max-w-6xl mx-auto">
  <h1 class="text-4xl font-bold mb-8">Presentations</h1>
  
  {% if site.talks.size > 0 %}
  
  <!-- Filter Controls -->
  <div class="mb-8 flex flex-wrap gap-4">
    <input type="text" id="search-input" placeholder="Search presentations..." class="px-4 py-2 border border-gray-300 rounded-lg flex-grow max-w-md">
  </div>
  
  <div id="presentations-list" class="space-y-6">
    {% assign sorted_talks = site.talks | sort: 'date' | reverse %}
    {% for talk in sorted_talks %}
    <article class="card presentation-item" data-title="{{ talk.title | downcase }}" data-event="{{ talk.event | downcase }}">
      <h2 class="text-2xl font-semibold mb-2">
        <a href="{{ talk.url | relative_url }}">{{ talk.title }}</a>
      </h2>
      
      {% if talk.event %}
      <p class="text-lg text-gray-700 mb-2">{{ talk.event }}</p>
      {% endif %}
      
      {% if talk.date %}
      <p class="text-sm text-gray-600 mb-3">
        <time datetime="{{ talk.date | date_to_xmlschema }}">{{ talk.date | date: "%B %d, %Y" }}</time>
      </p>
      {% endif %}
      
      {% if talk.excerpt %}
      <div class="prose max-w-none mb-4">
        {{ talk.excerpt }}
      </div>
      {% endif %}
      
      <div class="flex flex-wrap gap-2">
        {% if talk.slides %}
        <a href="{{ talk.slides }}" class="badge badge-primary" target="_blank" rel="noopener">Slides</a>
        {% endif %}
        {% if talk.video %}
        <a href="{{ talk.video }}" class="badge badge-secondary" target="_blank" rel="noopener">Video</a>
        {% endif %}
        {% if talk.pdf %}
        <a href="{{ talk.pdf }}" class="badge badge-primary" target="_blank" rel="noopener">PDF</a>
        {% endif %}
        <a href="{{ talk.url | relative_url }}" class="badge badge-secondary">Details</a>
      </div>
    </article>
    {% endfor %}
  </div>
  
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const searchInput = document.getElementById('search-input');
      const presentations = document.querySelectorAll('.presentation-item');
      
      if (searchInput) {
        searchInput.addEventListener('input', function() {
          const query = this.value.toLowerCase();
          
          presentations.forEach(function(pres) {
            const title = pres.getAttribute('data-title') || '';
            const event = pres.getAttribute('data-event') || '';
            
            const matches = title.includes(query) || event.includes(query);
            pres.style.display = matches ? 'block' : 'none';
          });
        });
      }
    });
  </script>
  
  {% else %}
  <div class="card text-center py-12">
    <p class="text-xl text-gray-600">No presentations available yet.</p>
    <p class="text-gray-500 mt-2">Check back soon for updates!</p>
  </div>
  {% endif %}
</div>

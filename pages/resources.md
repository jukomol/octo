---
layout: default
title: Resources
permalink: /pages/resources.html
---

<div class="max-w-6xl mx-auto">
  <h1 class="text-4xl font-bold mb-8">Resources</h1>
  
  {% if site.resources.size > 0 %}
  
  <!-- Filter Controls -->
  <div class="mb-8 flex flex-wrap gap-4">
    <input type="text" id="search-input" placeholder="Search resources..." class="px-4 py-2 border border-gray-300 rounded-lg flex-grow max-w-md">
    
    <select id="category-filter" class="px-4 py-2 border border-gray-300 rounded-lg">
      <option value="">All Categories</option>
      {% assign categories = site.resources | map: 'category' | uniq | sort %}
      {% for category in categories %}
        {% if category %}
        <option value="{{ category }}">{{ category }}</option>
        {% endif %}
      {% endfor %}
    </select>
  </div>
  
  <div id="resources-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {% for resource in site.resources %}
    <article class="card resource-item" data-title="{{ resource.title | downcase }}" data-category="{{ resource.category }}">
      <h2 class="text-xl font-semibold mb-2">
        <a href="{{ resource.url | relative_url }}">{{ resource.title }}</a>
      </h2>
      
      {% if resource.category %}
      <p class="mb-3">
        <span class="badge badge-primary">{{ resource.category }}</span>
      </p>
      {% endif %}
      
      {% if resource.excerpt %}
      <div class="prose max-w-none mb-4 text-sm">
        {{ resource.excerpt | strip_html | truncate: 150 }}
      </div>
      {% endif %}
      
      <div class="flex flex-wrap gap-2">
        {% if resource.url and resource.url != '' %}
        <a href="{{ resource.url }}" class="badge badge-secondary" target="_blank" rel="noopener">Access</a>
        {% endif %}
        <a href="{{ resource.url | relative_url }}" class="badge badge-primary">Details</a>
      </div>
    </article>
    {% endfor %}
  </div>
  
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const searchInput = document.getElementById('search-input');
      const categoryFilter = document.getElementById('category-filter');
      const resources = document.querySelectorAll('.resource-item');
      
      function filterResources() {
        const query = searchInput ? searchInput.value.toLowerCase() : '';
        const category = categoryFilter ? categoryFilter.value : '';
        
        resources.forEach(function(res) {
          const title = res.getAttribute('data-title') || '';
          const resCategory = res.getAttribute('data-category') || '';
          
          const matchesSearch = title.includes(query);
          const matchesCategory = !category || resCategory === category;
          
          res.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
        });
      }
      
      if (searchInput) {
        searchInput.addEventListener('input', filterResources);
      }
      
      if (categoryFilter) {
        categoryFilter.addEventListener('change', filterResources);
      }
    });
  </script>
  
  {% else %}
  <div class="card text-center py-12">
    <p class="text-xl text-gray-600">No resources available yet.</p>
    <p class="text-gray-500 mt-2">Check back soon for updates!</p>
  </div>
  {% endif %}
</div>

---
layout: default
title: Publications
permalink: /pages/publications.html
---

<div class="max-w-6xl mx-auto">
  <h1 class="text-4xl font-bold mb-8">Publications</h1>
  
  {% if site.pubs.size > 0 %}
  
  <!-- Filter Controls -->
  <div class="mb-8 flex flex-wrap gap-4">
    <input type="text" id="search-input" placeholder="Search publications..." class="px-4 py-2 border border-gray-300 rounded-lg flex-grow max-w-md">
  </div>
  
  <div id="publications-list" class="space-y-6">
    {% for pub in site.pubs reversed %}
    <article class="card publication-item" data-title="{{ pub.title | downcase }}" data-authors="{{ pub.authors | downcase }}" data-venue="{{ pub.venue | downcase }}">
      <h2 class="text-2xl font-semibold mb-2">
        <a href="{{ pub.url | relative_url }}">{{ pub.title }}</a>
      </h2>
      
      {% if pub.authors %}
      <p class="text-lg text-gray-700 mb-2">{{ pub.authors }}</p>
      {% endif %}
      
      {% if pub.venue %}
      <p class="text-sm text-gray-600 mb-3"><em>{{ pub.venue }}</em></p>
      {% endif %}
      
      {% if pub.excerpt %}
      <div class="prose max-w-none mb-4">
        {{ pub.excerpt }}
      </div>
      {% endif %}
      
      <div class="flex flex-wrap gap-2">
        {% if pub.pdf %}
        <a href="{{ pub.pdf }}" class="badge badge-primary" target="_blank" rel="noopener">PDF</a>
        {% endif %}
        {% if pub.code %}
        <a href="{{ pub.code }}" class="badge badge-secondary" target="_blank" rel="noopener">Code</a>
        {% endif %}
        {% if pub.doi %}
        <a href="https://doi.org/{{ pub.doi }}" class="badge badge-primary" target="_blank" rel="noopener">DOI</a>
        {% endif %}
        <a href="{{ pub.url | relative_url }}" class="badge badge-secondary">Details</a>
      </div>
    </article>
    {% endfor %}
  </div>
  
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const searchInput = document.getElementById('search-input');
      const publications = document.querySelectorAll('.publication-item');
      
      if (searchInput) {
        searchInput.addEventListener('input', function() {
          const query = this.value.toLowerCase();
          
          publications.forEach(function(pub) {
            const title = pub.getAttribute('data-title') || '';
            const authors = pub.getAttribute('data-authors') || '';
            const venue = pub.getAttribute('data-venue') || '';
            
            const matches = title.includes(query) || authors.includes(query) || venue.includes(query);
            pub.style.display = matches ? 'block' : 'none';
          });
        });
      }
    });
  </script>
  
  {% else %}
  <div class="card text-center py-12">
    <p class="text-xl text-gray-600">No publications available yet.</p>
    <p class="text-gray-500 mt-2">Check back soon for updates!</p>
  </div>
  {% endif %}
</div>

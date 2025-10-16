---
layout: default
title: Contact
permalink: /pages/contact.html
---

<div class="max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold mb-8">Contact</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="card">
      <h2 class="text-2xl font-bold mb-4">Get in Touch</h2>
      
      {% if site.data.bio.email %}
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">Email</h3>
        <a href="mailto:{{ site.data.bio.email }}" class="text-accent text-lg">{{ site.data.bio.email }}</a>
      </div>
      {% endif %}
      
      {% if site.data.bio.institution %}
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">Institution</h3>
        <p class="text-gray-700">{{ site.data.bio.institution }}</p>
      </div>
      {% endif %}
      
      {% if site.data.contact.office %}
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">Office</h3>
        <p class="text-gray-700">{{ site.data.contact.office }}</p>
      </div>
      {% endif %}
      
      {% if site.data.contact.availability %}
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">Availability</h3>
        <p class="text-gray-700">{{ site.data.contact.availability }}</p>
      </div>
      {% endif %}
    </div>
    
    <div class="card">
      <h2 class="text-2xl font-bold mb-4">Connect Online</h2>
      
      {% if site.data.bio.profiles and site.data.bio.profiles.size > 0 %}
      <ul class="space-y-4">
        {% for profile in site.data.bio.profiles %}
        <li>
          <a href="{{ profile.url }}" target="_blank" rel="noopener" class="flex items-center text-lg hover:text-primary transition-colors">
            <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
      
      <div class="mt-8">
        <h3 class="text-lg font-semibold mb-3">Research Interests</h3>
        <p class="text-gray-700">{{ site.data.bio.summary }}</p>
      </div>
    </div>
  </div>
</div>

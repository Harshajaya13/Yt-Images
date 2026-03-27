
        // Grab the container from the HTML
        const gallery = document.getElementById('gallery');

        // Loop 15 times to generate the 15 images
        for (let i = 1; i <= 15; i++) {
            
            // 1. Create the container card
            const card = document.createElement('figure');
            card.className = 'image-card';
            
            // 2. Create the image element
            const img = document.createElement('img');
            img.src = `${i}.jpeg`; // Loads 1.jpeg, 2.jpeg, etc.
            img.alt = `Wallpaper ${i}`;
            img.loading = "lazy"; // Helps the page load faster
            
            // 3. Create the info overlay (appears on hover)
            const info = document.createElement('div');
            info.className = 'image-info';
            
            // 4. Create the description text
            const desc = document.createElement('span');
            desc.className = 'image-desc';
            desc.textContent = `Image ${i}`; // The description text

            // Optional: Add a little tag like Wallhaven has
            const tag = document.createElement('span');
            tag.className = 'image-tag';
            tag.textContent = `JPG`;
            
            // Assemble the pieces together
            info.appendChild(desc);
            info.appendChild(tag);
            card.appendChild(img);
            card.appendChild(info);
            
            // Put the finished card into the gallery
            gallery.appendChild(card);
        }
  
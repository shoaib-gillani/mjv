export const category = {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',   
      },
      
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },

      
     
    ],
  };
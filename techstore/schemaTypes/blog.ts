import {defineField, defineType} from 'sanity'
export default defineType({
name:'posts',
title:"posts",
type:"document",
fields:[
    defineField({
    name:'title',
    title:"Title",
    type:"string"
}),
 defineField({
    name:'slug',
    title:"slug",
    type:"slug" ,
    options:{
        source:'title'
      }
}),
 defineField({
    name:'date',
    title:"Date",
    type:"string"
}),
 defineField({
    name:'shortdescription',
    title:"ShortDescription",
    type:"string"
}),
 defineField({
     name: 'image',
      title: 'Image',
      type: 'image', // Using Sanity's image type for image field
      options: {
        hotspot: true,
      },
}),
 defineField({
    name:'description',
    title:"Description",
    type:"string"
}),
]
})
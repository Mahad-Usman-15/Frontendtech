import {defineField, defineType} from 'sanity'
export default defineType({
name:'blogdetail',
title:"Blogdetail",
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
    name:'description',
    title:"Description",
    type:"string"
}),

]
})
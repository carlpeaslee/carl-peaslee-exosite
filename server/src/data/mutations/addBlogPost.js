import BlogPost from '../models/BlogPost'
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLList
} from 'graphql'

const addBlogPost =  {
  type: GraphQLString,
  args: {
    title: {
      type: GraphQLString
    },
    author: {
      type: GraphQLString
    },
    publicationDate: {
      type: GraphQLString
    },
    featuredImage: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    }
  },
  resolve: (source, args, context) => {
    console.log('addBlogPost context.permissions', context.permissions)
    console.log(new Date(args.publicationDate))
    if(context.permissions[0] == 0) {
      console.log('adding blogPost')
      buildBlogPost(args.title, args.author, args.publicationDate, args.featuredImage, args.content)
      return "blogPost created good job"
    } else {
      console.log('didnt see a 0')
      return "sorry you don't have proper permissions to create a blog post"
    }
  }
}


function buildBlogPost(title, author, publicationDate, featuredImage, content) {
  console.log('buildBlogPost')
  BlogPost.build({
    title,
    author,
    publicationDate,
    featuredImage,
    content
  })
  .save()
  .then( (anotherTask) => {
    return "wow success!"
  })
  .catch( (error) => {
    console.log(error)
  })
}

export default addBlogPost

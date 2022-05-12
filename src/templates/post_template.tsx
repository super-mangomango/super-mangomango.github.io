import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import PostHead from "../components/Post/PostHead";
import PostContent from "components/Post/PostContent";
import Footer from "components/Footer";

type PostTemplateProps = {
    data: {
        allMarkdownRemark: {
            edges: PostPageItemType[] // 존재하지 않는 타입이므로 에러가 발생하지만 일단 작성해주세요
        }
    }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
    data: {
        allMarkdownRemark: { edges },
    },
}) {
    const {
        node: {
            html,
            frontmatter: {
                title,
                summary, // 나중에 사용할 예정입니다!
                date,
                categories
            },
        },
    } = edges[0]
    return <>
        <PostHead date={date} categories={categories}/>
        <PostContent html={html} />
        <Footer />
    </>
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
export type PostPageItemType = {
    node: {
        html: string
        frontmatter: PostFrontmatterType
    }
}
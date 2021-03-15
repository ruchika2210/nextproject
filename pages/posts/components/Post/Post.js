  import React from "react";
import Link from "next/link";
import styles from "./Post.module.css"

export default function Post({ id, title, body }) {
    return (
      
       <>
              <h3 className={styles.postHeading}>
                <Link href="/posts/[id]" as={"/posts/" + id}>
                  <a> {title} </a>
                </Link>
              </h3>
              <p>{body}</p>
         </>   
        
  
    );
  }
  
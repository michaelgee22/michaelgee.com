import PropTypes from 'prop-types'

import { Button, Icon, Sidebar as SUISidebar } from 'semantic-ui-react'
import { FcDocument } from 'react-icons/fc'

import { useRouter } from 'next/router'

import { MG_NAV_PAGES, MG_SOCIAL_MEDIA } from '../../constants'
import { blogPosts } from './content'

import styles from './Sidebar.module.css'

export const Sidebar = props => {
  const router = useRouter()

  return (
    <SUISidebar visible={true} onHide={props.onHide} direction="right">
      <div className={styles.sidebarContainer}>
        <Button onClick={props.onHide} id={styles.sidebarCloseBtn}>
          <Icon name="close" />
        </Button>

        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Pages</h3>
          {MG_NAV_PAGES.map((navItem, index) => {
            return (
              <div
                onClick={() => _onChangePage(navItem.pathname)}
                className={
                  router.pathname === navItem.pathname
                    ? `${styles.sidebarMenuItem} ${styles.selectedMenuItem}`
                    : styles.sidebarMenuItem
                }
                style={index === MG_NAV_PAGES.length - 1 ? { borderBottom: '1px solid #eee' } : {}}
                key={navItem.text}
              >
                <Icon name={navItem.icon} />
                <span className={styles.sidebarMenuItemText}>{navItem.text}</span>
              </div>
            )
          })}
        </section>

        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Recent Blog Posts</h3>
          <ul className={styles.blogPostsContainer}>
            {blogPosts.map((blogPost, index) => {
              return (
                <li key={`blog-post=${index}`}>
                  <a href={blogPost.url} target="_blank" rel="noopener noreferrer">
                    {blogPost.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </section>

        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Resume</h3>
          <a
            href="https://drive.google.com/file/d/1evQaxVmXenXp39aJC6jO0u4-PyhG9TkQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sidebarMenuItem}
            style={{ display: 'flex' }}
          >
            <FcDocument />
            <span className={styles.sidebarMenuItemText} style={{ marginTop: 3 }}>
              Resume
            </span>
          </a>
        </section>

        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Social</h3>
          {MG_SOCIAL_MEDIA.map((socialItem, index) => {
            return (
              <a
                href={socialItem.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sidebarMenuItem}
                style={
                  index === MG_SOCIAL_MEDIA.length - 1 ? { borderBottom: '1px solid #eee' } : {}
                }
                key={socialItem.text}
              >
                <Icon name={socialItem.icon} />
                <span className={styles.sidebarMenuItemText}>{socialItem.text}</span>
              </a>
            )
          })}
        </section>
      </div>
    </SUISidebar>
  )

  function _onChangePage(pathname) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    props.onHide()
    router.push(pathname)
  }
}

Sidebar.propTypes = {
  onHide: PropTypes.func.isRequired
}

import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 bg-slate-100 p-1 text-sm font-medium uppercase text-primary-500 hover:bg-slate-200 hover:text-primary-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-primary-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag

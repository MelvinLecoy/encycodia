import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'u9c1gb07',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
  }
})

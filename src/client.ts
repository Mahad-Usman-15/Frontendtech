import { createClient } from "@sanity/client"

export default createClient({
    projectId: 'qoey6z9r',
  dataset: 'production',
    useCdn:true,
    apiVersion:"2025-10-02"
})
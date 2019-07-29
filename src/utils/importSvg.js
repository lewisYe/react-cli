const requireAll = requireContext => requireContext.keys().map(requireContext)
const svgs = require.context('~/static/svgs', true, /\.svg$/)
requireAll(svgs)
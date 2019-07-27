import path from 'path'
import test from 'ava'
import sao from 'sao'

const generator = path.join(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mock({ generator })
  t.true(stream.fileList.includes('src/index.ts'))
})

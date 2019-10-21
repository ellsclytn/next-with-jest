import dynamic from 'next/dynamic'

const DynamicMyTestComponent = dynamic(() => import('../components/MyTestComponent').then(({ MyTestComponent }) => MyTestComponent ))

export default () => (
  <div>
    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
    <p>Hello World!</p>
    <DynamicMyTestComponent />
  </div>
)

import React from 'react'
import './Styles.module.scss'

const description = '[[A man with a beret and a woman are standing on a boardwalk, leaning on a handrail.]]\nMan: A woodpecker!\n<<Pop pop pop>>\nWoman: Yup.\n\n[[The woodpecker is banging its head against a tree.]]\nWoman: He hatched about this time last year.\n<<Pop pop pop pop>>\n\n[[The woman walks away.  The man is still standing at the handrail.]]\n\nMan: ... woodpecker?\nMan: It\'s your birthday!\n\nMan: Did you know?\n\nMan: Did... did nobody tell you?\n\n[[The man stands, looking.]]\n\n[[The man walks away.]]\n\n[[There is a tree.]]\n\n[[The man approaches the tree with a present in a box, tied up with ribbon.]]\n\n[[The man sets the present down at the base of the tree and looks up.]]\n\n[[The man walks away.]]\n\n[[The present is sitting at the bottom of the tree.]]\n\n[[The woodpecker looks down at the present.]]\n\n[[The woodpecker sits on the present.]]\n\n[[The woodpecker pulls on the ribbon tying the present closed.]]\n\n((full width panel))\n[[The woodpecker is flying, with an electric drill dangling from its feet, held by the cord.]]\n\n{{Title text: If you don\'t have an extension cord I can get that too.  Because we\'re friends!  Right?}}"'

export const Descripcion = () => {
  return (
    <div className='containerDescription'>
      <h1>Woodpecker</h1>
      <div className='containerInformation'>
        <p><span>Número: </span> 686</p>
        <p><span>Fecha: </span>24-07-2020</p>
      </div>
      <p>{description}</p>
    </div>
  )
}

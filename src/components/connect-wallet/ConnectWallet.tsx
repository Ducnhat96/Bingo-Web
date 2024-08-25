import { Button } from '@nextui-org/react'
import React, { FC } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { addressShorten } from '../../../utils'

type Props = {}

const ConnectWallet: FC<Props> = (props) => {
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { isConnected, address, isConnecting } = useAccount()

  if (isConnected && address) return (
    <Button
      color="primary"
      onClick={() => disconnect()}
    >
      {addressShorten(address)}
    </Button>
  )

  return (
    <Button
      color="primary"
      onClick={() => connect({ connector: injected() })}
      isLoading={isConnecting}
    >
      Connect Wallet
    </Button>
  )
}

export default ConnectWallet

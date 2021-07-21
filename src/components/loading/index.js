import React from 'react'
import {Spinner, LockBody, ReleaseBody, Picture} from './styles/loading'

export default function Loading({src, ...restProps}) {
    return(
        <>
            <Spinner {...restProps}>
                <LockBody />
                <Picture src={`/images/users/${src}.png`} />
            </Spinner>
        </>
    )
}

Loading.Spinner = function LoadingSpinner({children, ...restProps}) {
    return <Spinner {...restProps}>{children}</Spinner>
}

Loading.LockBody = function LoadingLockBody({children, ...restProps}) {
    return <LockBody {...restProps}>{children}</LockBody>
}

Loading.ReleaseBody = function LoadingReleaseBody({children, ...restProps}) {
    return <ReleaseBody {...restProps}>{children}</ReleaseBody>
}

Loading.Picture = function LoadingPicture({src, ...restProps}) {
    return <Picture src=""/>
}


// Spinner styled component
// Lockbody styled component
// Will be a child of the spinner
// A new CC component that will be the release body

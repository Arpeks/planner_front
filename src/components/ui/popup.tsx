import { CSSProperties, PropsWithChildren, useState } from 'react'
import { Popup } from 'react-popup-ts'

interface IPopupUI {
	buttonName?: string
	text: string
	style?: CSSProperties
}

export function PopupUI({
	text,
	style,
	buttonName
}: PropsWithChildren<IPopupUI>) {
	const [is_show, setIsShow] = useState(false)

	function toggleShow() {
		setIsShow(is_show => !is_show)
	}

	return (
		<div>
			<div onClick={toggleShow}>{buttonName}</div>

			<div style={{ position: 'fixed', left: 300, top: 300 }}>
				<Popup
					is_show={is_show}
					handleAfterEndTimeExist={toggleShow}
					time_exist={0}
				>
					<div
						style={{
							width: 'fit-content',
							padding: '6px 12px',
							borderRadius: '10px',
							backgroundColor: 'red',
							color: 'white',
							opacity: 1
						}}
					>
						{text}
					</div>
				</Popup>
			</div>
		</div>
	)
}

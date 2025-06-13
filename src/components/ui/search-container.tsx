import { fetchItemInfo } from "@/api/albiondataproject"
import { Button, Input, Stack, Textarea } from "@chakra-ui/react"
import { useState } from "react"

export const SearchContainer = () => {
    const [itemInfo, setItemInfo] = useState("...")
    const [searchItem, setSearchItem] = useState("")

    function getItemInfo() {
        return fetchItemInfo(searchItem).then(data => setItemInfo(data))
    }


    return<Stack direction="column" >
        <Stack direction="row">
            <Input 
                placeholder='Item ID eg T4_BAG'
                onChange={(event) => setSearchItem(event.target.value)}
            />
            <Button onClick={getItemInfo}>Get Prices</Button>
        </Stack>
        <Textarea value={itemInfo} readOnly>
        </Textarea>
    </Stack>
}

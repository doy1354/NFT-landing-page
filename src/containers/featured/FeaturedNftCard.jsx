import Picture from "../../components/common/Picture";
import OutlinedButton from "../../components/common/buttons/OutlinedButton";

export default function FeaturedNftCard({ item }) {
    const { images, title, nftOwner, ownerImg, totalItems } = item || {};
    return (
        <div className="space-y-7">
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
                {images.map((imgItem, index) =>
                    <div key={index} className={`${index !== 0 ? 'h-[85px] min-[530px]:max-tablet:h-full' : 'h-[272px] col-span-2 row-span-3 min-[530px]:max-tablet:col-span-3 min-[530px]:max-tablet:row-span-2'}`}>
                        <Picture src={imgItem} alt="nft picture" extraClasses="rounded-xl cursor-pointer" />
                    </div>
                )}
            </div>

            <div className="space-y-3">
                <h3 className="text-600 text-neutral-900 font-bold leading-tight max-[275px]:text-center">{title}</h3>

                <div className="flex flex-wrap items-center justify-between max-[275px]:justify-center gap-4">
                    <div className="flex items-center gap-[10px]">
                        <div className="h-7">
                            <Picture
                                src={ownerImg}
                                alt="nft buyer"
                                extraClasses=""
                            />
                        </div>
                        <p className="font-semibold cursor-pointer">by {nftOwner}</p>
                    </div>

                    <OutlinedButton
                        type="button"
                        extraClasses="px-3 py-[9px] text-200 font-bold bg-neutral-300 leading-[100%]"
                    >
                        Total {totalItems} Items
                    </OutlinedButton>
                </div>
            </div>
        </div>
    );
}

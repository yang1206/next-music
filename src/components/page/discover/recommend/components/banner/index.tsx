import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Carousel } from 'antd'
import type { CarouselRef } from 'antd/lib/carousel'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { BannerWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { getBanner, selectBanners } from '@/store/slice/recommend'

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const dispatch = useAppDispatch()
  useEffect(() => {
    // 请求数据
    dispatch(getBanner())
  }, [])
  // 从store取出banners
  const topBanner = useAppSelector(selectBanners)
  // 走马灯轮播之前回调
  const bannerChange = useCallback((from: React.SetStateAction<number>, to: any) => {
    setTimeout(() => {
      // 这里有bug，走马灯到最后一个不会触发回调事件
      if (from === to)
        setCurrentIndex(0)
      from > to ? setCurrentIndex(from) : setCurrentIndex(to)
    }, 0)
  }, [])
  const bannerRef = useRef<CarouselRef>(null)
  // 定义背景高斯模糊图
  const bgImage = topBanner?.data[currentIndex] && `${topBanner.data[currentIndex].imageUrl}?imageView&blur=40x20`
  return (
    <BannerWrapper style={{ background: `url(${bgImage}) center center/ 6000px` }}>
      <div className="banner wrap-v2">
        <div className="BannerContent">
          <Carousel ref={bannerRef} autoplay effect="fade" beforeChange={bannerChange}>
            {topBanner.data.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className="BannerControl control">
          <div className="btn left" onClick={() => bannerRef.current?.prev()}>
            <LeftOutlined />
          </div>
          <div className="btn right" onClick={() => bannerRef.current?.next()}>
            <RightOutlined />
          </div>
        </div>
      </div>
    </BannerWrapper>
  )
}
export default memo(Banner)
